import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { categoriesServices } from './categories.services';

const getAllCategories = catchAsync(async (req, res) => {
  const result = await categoriesServices.getAllCategoriesFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Categories retrieved successfully!',
    data: result,
  });
});

export const categoriesControllers = {
  getAllCategories,
};
