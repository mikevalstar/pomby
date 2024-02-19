import { ApolloServer, BaseContext } from '@apollo/server';
import fastifyApollo, { fastifyApolloDrainPlugin } from '@as-integrations/fastify';
import multipart from '@fastify/multipart';
import 'dotenv/config';
import Fastify from 'fastify';

import apiUpload from './api/upload';
import graphSchema from './graph/graph';
import './lib/env';

const fastify = Fastify({
  logger: true,
});

fastify.register(multipart);
fastify.register(apiUpload);

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
