/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { TaskModel } from '../task/task.model';

const getExpectedTasksFromDB = async (query: Record<string, unknown>) => {
  const queryObj = { ...query };

  const taskSearchableFields = ['name', 'description'];
  let searchTerm = '';
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }
  const searchQuery = TaskModel.find({
    $or: taskSearchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  //   for filtering
  const excludeFields = [
    'searchTerm',
    'status',
    'priority',
    'tags',
    'page',
    'limit',
  ];
  excludeFields.forEach((el) => delete queryObj[el]);

  let statusQueryObj = { ...queryObj };
  if (query?.status) {
    statusQueryObj = { status: query.status, ...queryObj };
  }

  let priorityQueryObj = { ...statusQueryObj };
  if (query?.priority) {
    priorityQueryObj = { priority: query.priority, ...statusQueryObj };
  }

  //   filtering basis on tags name
  let tagQueryObj = { ...priorityQueryObj };
  if (query?.tags) {
    tagQueryObj = { 'tags.title': query.tags, ...priorityQueryObj };
  }

  // Perform the search query
  const filterQuery = searchQuery.find(tagQueryObj, {
    __v: 0,
  });

  //pagination and limiting
  let page = 1;
  let limit = 10;
  let skip = 0;
  if (query?.limit) {
    limit = Number(query?.limit);
  }
  if (query?.page) {
    page = Number(query?.page);
    skip = (page - 1) * limit;
  }
  const paginateQuery = filterQuery.skip(skip);
  const result = await paginateQuery.limit(limit);

  const count = await TaskModel.countDocuments();

  return { data: result, count: count };
};

export const tasksServices = {
  getExpectedTasksFromDB,
};
