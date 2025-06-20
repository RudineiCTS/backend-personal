import { prisma } from '../../prisma';
import { CreateStudentInput } from './student.schema';

export async function getAllStudents() {
  return prisma.studentGym.findMany();
}

export async function createStudent(input: CreateStudentInput) {
  return prisma.studentGym.create({
    data: input,
  });
}
