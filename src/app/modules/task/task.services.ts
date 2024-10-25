/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { TTask } from './task.interface';
import { TaskModel } from './task.model';

const createTaskIntoDB = async (task: TTask) => {
  const result = await TaskModel.create(task);

  // send selective data to frontend
  const sendData = result.toObject({
    virtuals: false,
    versionKey: false,
    transform: (doc, ret) => {
      delete ret.__v;
    },
  });
  return sendData;
};

const getSingleTaskFromDB = async (taskId: string) => {
  const result = await TaskModel.findById(taskId, { __v: 0 });
  return result;
};

const softDeleteSingleTaskFromDB = async (taskId: string) => {
  await TaskModel.findByIdAndUpdate(taskId, { isDeleted: true });
  return null;
};

const partialUpdateSingleTaskFromDB = async (
  taskId: string,
  data: Record<string, any>
) => {
  await TaskModel.findByIdAndUpdate(taskId, data);
  return null;
};

export const taskServices = {
  createTaskIntoDB,
  getSingleTaskFromDB,
  softDeleteSingleTaskFromDB,
  partialUpdateSingleTaskFromDB,
};
