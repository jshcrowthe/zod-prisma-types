import { z } from 'zod';
import * as PrismaClient from '@prisma/client';
import { NestedBytesNullableFilterSchema } from './NestedBytesNullableFilterSchema';

export const NestedBytesNullableFilterSchema: z.ZodType<PrismaClient.Prisma.NestedBytesNullableFilter> = z.object({
  equals: z.instanceof(Buffer).optional().nullable(),
  in: z.instanceof(Buffer).array().optional().nullable(),
  notIn: z.instanceof(Buffer).array().optional().nullable(),
  not: z.union([ z.instanceof(Buffer),z.lazy(() => NestedBytesNullableFilterSchema) ]).optional().nullable(),
}).strict()