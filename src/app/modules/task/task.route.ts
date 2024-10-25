import express from 'express';
import { taskControllers } from './task.controller';
import validateRequest from '../../middlewares/validateRequest';
import { taskValidations } from './task.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(taskValidations.taskCreateValidationSchema),
  taskControllers.createTask
);

router.get('/:taskId', taskControllers.getSingleTask);
router.delete('/:taskId', taskControllers.softDeleteSingleTask);
router.patch('/:taskId', taskControllers.partialUpdateSingleTask);

export const taskRoutes = router;
