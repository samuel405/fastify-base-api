import { FastifyInstance } from 'fastify';
import { healthController } from '../controllers/health.controllers';
import { ulid } from 'ulid';

export const healthRoutes = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/', healthController);
  fastify.get('/health', healthController);
  fastify.get('/health/key', () => ulid());
};
