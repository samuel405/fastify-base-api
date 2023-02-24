import fastify, {
  FastifyInstance,
  FastifyListenOptions
} from 'fastify';

import cors from '@fastify/cors';
import helmet from '@fastify/helmet';

import { HOST, PORT } from './constants';

import { healthRoutes } from './routes/health.routes';

const server = fastify({
  logger: true,
});

server.register(cors, { origin: true, });
server.register(helmet);

server.register(async (publicRoutes: FastifyInstance) => {
  publicRoutes.register(healthRoutes);
});

const listenOpts: FastifyListenOptions = {
  port: PORT,
  host: HOST
};

server.listen(listenOpts, (error: Error | null) => {
  if (error) {
    server.log.error(error);
    process.exit(1);
  }
});
