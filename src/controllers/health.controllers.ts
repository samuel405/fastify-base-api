import { FastifyReply, FastifyRequest } from 'fastify';

export const healthController = async (
  _: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  return reply.send({
    'status': 'online',
    'version': '1.0.0',
  });
};
