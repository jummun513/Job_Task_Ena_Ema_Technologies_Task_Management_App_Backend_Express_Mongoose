import { z } from 'zod';

const tagCreateValidationSchema = z.object({
  title: z.string({
    required_error: 'Tag title field is required!',
    invalid_type_error: 'Tag title field allowed only string!',
  }),
  isDeleted: z.boolean().optional(),
});

const taskCreateValidationSchema = z.object({
  name: z.string({
    required_error: 'Task name field is required!',
    invalid_type_error: 'Task name field allowed only string!',
  }),
  description: z.string({
    required_error: 'Description field is required!',
    invalid_type_error: 'Description field allowed only string!',
  }),
  dueDate: z.string({
    required_error: 'Due date field is required!',
    invalid_type_error: 'Due date field allowed only string!',
  }),
  tags: z.array(tagCreateValidationSchema),
  priority: z.enum(['low', 'medium', 'high'], {
    required_error: 'Priority field is required!',
    invalid_type_error: 'Priority field allowed only string!',
  }),
  status: z
    .enum(['completed', 'pending'], {
      invalid_type_error: 'Priority field allowed only string!',
    })
    .default('pending'),
  isReminder: z.boolean().default(false),
});

export const taskValidations = {
  taskCreateValidationSchema,
};
