/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { TaskModel } from '../task/task.model';

const getAllCategoriesFromDB = async () => {
  const results = await TaskModel.aggregate([
    { $unwind: '$tags' },
    { $match: { 'tags.isDeleted': false } },
    {
      $group: {
        _id: '$tags.title',
        title: { $first: '$tags.title' },
        isDeleted: { $first: '$tags.isDeleted' },
      },
    },
    {
      $project: {
        _id: 0,
        title: 1,
        isDeleted: 1,
      },
    },
  ]);
  return results;
};

export const categoriesServices = {
  getAllCategoriesFromDB,
};
