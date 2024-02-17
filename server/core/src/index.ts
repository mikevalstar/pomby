import { ApolloServer, BaseContext } from '@apollo/server';
import fastifyApollo, { fastifyApolloDrainPlugin } from '@as-integrations/fastify';
import Fastify from 'fastify';

import graphSchema from './graph/graph';

const fastify = Fastify();

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
