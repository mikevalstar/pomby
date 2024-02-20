import 'dotenv/config';

import Fastify from 'fastify';

import './lib/env';
import baseRoutes from './routes/baseURLs';

const fastify = Fastify({
  logger: true,
});

fastify.register(baseRoutes);

async function main() {
  fastify.listen({ port: 3100 }, function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }

    console.info(`Server listening at ${address}`);
  });
}

main();
