import { z } from 'zod';
import * as PrismaClient from '@prisma/client';
import { LocationWhereInputSchema } from './LocationWhereInputSchema';

export const LocationRelationFilterSchema: z.ZodType<PrismaClient.Prisma.LocationRelationFilter> = z.object({
  is: z.lazy(() => LocationWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => LocationWhereInputSchema).optional().nullable(),
}).strict()