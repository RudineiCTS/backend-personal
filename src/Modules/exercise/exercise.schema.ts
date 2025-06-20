import {z} from 'zod';

export const createExerciseSchema = z.object({
  nameExercise: z.string(),
  description: z.string(),
  tag: z.string()
})
