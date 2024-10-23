import { Date } from 'mongoose';

export type TTag = {
  title: string;
  isDeleted: boolean;
};

export type TTask = {
  name: string;
  description: string;
  dueDate: Date;
  priority: 'low' | 'medium' | 'high';
  tags: [TTag];
  status: 'completed' | 'pending';
  isReminder: boolean;
  isDeleted: boolean;
};
