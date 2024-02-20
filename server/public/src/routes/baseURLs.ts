import env from '@env';
import db from '@lib/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import fs from 'fs';
import path from 'path';

type FileRequest = FastifyRequest<{
  Params: { '*': string };
}>;

async function routes(fastify: FastifyInstance) {
  fastify.get('/i/*', async (request: FileRequest, reply) => {
    console.log(request.params);

    if (!request.params['*']) {
      return reply.status(400).send({ error: 'Invalid file path' });
    }

    const fileInfo = await db.query<{ id: string; originalFilename: string; mimeType: string }>(
      `SELECT "id", "originalFilename", "mimeType"
                  FROM "Asset"
                  WHERE
                    "publicUrl" = $1 AND
                    "deletedAt" IS NULL AND
                    "public" = true`,
      [request.params['*']],
    );

    console.log('fileInfo', fileInfo);

    if (!fileInfo || fileInfo.rows.length === 0) {
      return reply.status(404).send({ error: 'File info not found' });
    }

    const file = fileInfo.rows[0];

    const filePath = path.join(env.UPLOAD_DIR, file.id, 'orig', file.originalFilename);

    console.log(filePath);

    if (!fs.existsSync(filePath)) {
      return reply.status(404).send({ error: 'File not found' });
    }

    // create stream
    const stream = fs.createReadStream(filePath);

    return reply.type(file.mimeType || 'application/octet-stream').send(stream);
  });
}

export default routes;
