import { FastifyInstance } from 'fastify';
import { createStudentHandler, getAllStudentsHandler } from './student.controller';

export async function studentRoutes(app: FastifyInstance) {
  app.get('/', getAllStudentsHandler);
  app.post('/', createStudentHandler);
}
