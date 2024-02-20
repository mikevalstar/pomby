import 'dotenv/config';

import { ApolloServer, BaseContext } from '@apollo/server';
import fastifyApollo, { fastifyApolloDrainPlugin } from '@as-integrations/fastify';
import multipart from '@fastify/multipart';
import Fastify from 'fastify';

import fileRoutes from './api/file';
import apiUpload from './api/upload';
import graphSchema from './graph/graph';
import './lib/env';

const fastify = Fastify({
  logger: true,
});

fastify.register(multipart, {
  limits: {
    fieldNameSize: 200, // 100B
    fieldSize: 1000000, // 1MB
    fields: 50,
    fileSize: 100000000, // 100MB
    files: 1,
    parts: 1000,
    headerPairs: 100,
  },
});
fastify.register(apiUpload);
fastify.register(fileRoutes);

const apollo = new ApolloServer<BaseContext>({
  schema: graphSchema.schema,
  plugins: [fastifyApolloDrainPlugin(fastify)],
});

async function main() {
  await apollo.start();

  await fastify.register(fastifyApollo(apollo));
  fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }

    console.info(`Server listening at ${address}`);
  });
}

main();
