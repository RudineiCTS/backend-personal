import { FastifyReply, FastifyRequest } from 'fastify';
import { createStudent, getAllStudents } from './student.service';

export async function getAllStudentsHandler(req: FastifyRequest, reply: FastifyReply) {
  const students = await getAllStudents();
  return reply.send(students);
}

export async function createStudentHandler(req: FastifyRequest, reply: FastifyReply) {
  const student = await createStudent(req.body as any);
  return reply.code(201).send(student);
}
