import { z } from 'zod';

export const createStudentSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  dateOfBirth: z.string(),
  gender: z.string(),
  goalToAchieve: z.string(),
  observation: z.string().optional(),
});

export type CreateStudentInput = z.infer<typeof createStudentSchema>;
