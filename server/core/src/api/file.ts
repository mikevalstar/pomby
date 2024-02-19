import { FastifyInstance, FastifyRequest } from 'fastify';
import fs from 'fs';
import path from 'path';

import env from '../lib/env';
import prisma from '../lib/prisma';

type FileRequest = FastifyRequest<{
  Params: { id: string; name: string };
}>;

async function routes(fastify: FastifyInstance) {
  fastify.get('/file/:id/:name', async (request: FileRequest, reply) => {
    // reads the file from teh uploads folder and pipes it to the user
    const fileInfo = await prisma.asset.findUnique({
      where: { id: request.params.id, deletedAt: null },
    });

    console.log(request.params);
    console.log('fileInfo', fileInfo);

    if (!fileInfo) {
      return reply.status(404).send({ error: 'File info not found' });
    }

    const filePath = path.join(env.UPLOAD_DIR, fileInfo.id, 'orig', fileInfo.originalFilename);

    console.log(filePath);

    if (!fs.existsSync(filePath)) {
      return reply.status(404).send({ error: 'File not found' });
    }

    // create stream
    const stream = fs.createReadStream(filePath);

    return reply.type(fileInfo.mimeType || 'application/octet-stream').send(stream);
  });
}

export default routes;
