import { z } from 'zod';
import * as PrismaClient from '@prisma/client';
import { InputJsonValue } from '../helpers';
import { JsonNullValueFilterSchema } from './JsonNullValueFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedJsonFilterSchema } from './NestedJsonFilterSchema';

export const JsonWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.JsonWithAggregatesFilter> = z.object({
  equals: z.union([ InputJsonValue,z.lazy(() => JsonNullValueFilterSchema) ]).optional(),
  path: z.string().array().optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_contains: InputJsonValue.optional().nullable(),
  array_starts_with: InputJsonValue.optional().nullable(),
  array_ends_with: InputJsonValue.optional().nullable(),
  lt: InputJsonValue.optional(),
  lte: InputJsonValue.optional(),
  gt: InputJsonValue.optional(),
  gte: InputJsonValue.optional(),
  not: z.union([ InputJsonValue,z.lazy(() => JsonNullValueFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedJsonFilterSchema).optional(),
  _max: z.lazy(() => NestedJsonFilterSchema).optional(),
}).strict()