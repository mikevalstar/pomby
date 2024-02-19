import { FastifyInstance } from 'fastify';
import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import util from 'util';
import { z } from 'zod';

import env from '../lib/env';
import prisma from '../lib/prisma';

const pump = util.promisify(pipeline);

// https://snyk.io/blog/node-js-file-uploads-with-fastify/

const fileValidation = z.object({
  filename: z
    .string()
    .min(1)
    .max(200)
    .trim()
    .regex(/^[-\w^&'@{}[\],$=!#().%+~ ]+$/), // Prevent people trying to hack the path
  mimetype: z.string().max(100),
  file: z.any(),
});

async function routes(fastify: FastifyInstance) {
  fastify.post('/api/upload/new', async (request, reply) => {
    const data = await request.file();
    if (!data) {
      return reply.status(400).send({ error: 'No file uploaded' });
    }

    try {
      fileValidation.parse(data);
    } catch (e) {
      console.error(e);
      return reply.status(400).send({ error: 'Invalid file' });
    }

    const upload = await prisma.asset.create({
      data: {
        title: data.filename,
        originalFilename: data.filename,
        mimeType: data.mimetype,
      },
    });

    // put the file in teh upload directory
    const uploadPath = path.join(env.UPLOAD_DIR, upload.id, 'orig', data.filename);
    await fs.promises.mkdir(path.dirname(uploadPath), { recursive: true });
    await pump(data.file, fs.createWriteStream(uploadPath));

    await prisma.asset.update({
      where: { id: upload.id },
      data: { status: 'UPLOADED' },
    });

    return reply.send({ id: upload.id });
  });
}

export default routes;
