import { z } from 'zod';
import * as PrismaClient from '@prisma/client';
import { SortOrderSchema } from '../enums';
import { NonDefaultModelCountOrderByAggregateInputSchema } from './NonDefaultModelCountOrderByAggregateInputSchema';
import { NonDefaultModelAvgOrderByAggregateInputSchema } from './NonDefaultModelAvgOrderByAggregateInputSchema';
import { NonDefaultModelMaxOrderByAggregateInputSchema } from './NonDefaultModelMaxOrderByAggregateInputSchema';
import { NonDefaultModelMinOrderByAggregateInputSchema } from './NonDefaultModelMinOrderByAggregateInputSchema';
import { NonDefaultModelSumOrderByAggregateInputSchema } from './NonDefaultModelSumOrderByAggregateInputSchema';

export const NonDefaultModelOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.NonDefaultModelOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  string: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => NonDefaultModelCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => NonDefaultModelAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => NonDefaultModelMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => NonDefaultModelMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => NonDefaultModelSumOrderByAggregateInputSchema).optional(),
}).strict()