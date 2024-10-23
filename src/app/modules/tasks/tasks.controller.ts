import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { tasksServices } from './task.services';

const getExpectedTasks = catchAsync(async (req, res) => {
  const result = await tasksServices.getExpectedTasksFromDB(req.query);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Tasks retrieved successfully!',
    meta: {
      page: Number(req?.query?.page) || 1,
      limit: Number(req?.query?.limit) || 10,
      total: result?.count,
      now: result?.data?.length,
    },
    data: result?.data,
  });
});

export const tasksControllers = {
  getExpectedTasks,
};
