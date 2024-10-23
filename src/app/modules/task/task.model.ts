import { model, Schema } from 'mongoose';
import { TTag, TTask } from './task.interface';

const tagSchema = new Schema<TTag>(
  {
    title: {
      type: String,
      required: [true, 'Tag title is required.'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { _id: false }
);

const taskSchema = new Schema<TTask>(
  {
    name: {
      type: String,
      required: [true, 'Task name is required.'],
    },
    description: {
      type: String,
    },
    dueDate: {
      type: Date,
    },
    tags: [tagSchema],
    priority: {
      type: String,
      required: [true, 'Priority is required.'],
      enum: ['low', 'medium', 'high'],
    },
    status: {
      type: String,
      enum: ['completed', 'pending'],
      default: 'pending',
    },
    isReminder: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const TaskModel = model<TTask>('Task', taskSchema);
