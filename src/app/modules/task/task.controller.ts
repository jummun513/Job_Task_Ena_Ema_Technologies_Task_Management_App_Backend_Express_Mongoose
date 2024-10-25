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

const softDeleteSingleTask = catchAsync(async (req, res) => {
  const { taskId } = req.params;
  const result = await taskServices.softDeleteSingleTaskFromDB(taskId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Task deleted successfully!',
    data: result,
  });
});

const partialUpdateSingleTask = catchAsync(async (req, res) => {
  const { taskId } = req.params;
  const result = await taskServices.partialUpdateSingleTaskFromDB(
    taskId,
    req?.body
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Task deleted successfully!',
    data: result,
  });
});

export const taskControllers = {
  createTask,
  getSingleTask,
  softDeleteSingleTask,
  partialUpdateSingleTask,
};
