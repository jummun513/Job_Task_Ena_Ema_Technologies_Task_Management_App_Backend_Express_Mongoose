import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { taskServices } from './task.services';

const createTask = catchAsync(async (req, res) => {
  const result = await taskServices.createTaskIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Task created successfully!',
    data: result,
  });
});

const getSingleTask = catchAsync(async (req, res) => {
  const { taskId } = req.params;
  const result = await taskServices.getSingleTaskFromDB(taskId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Task retrieved successfully!',
    data: result,
  });
});

export const taskControllers = {
  createTask,
  getSingleTask,
};
