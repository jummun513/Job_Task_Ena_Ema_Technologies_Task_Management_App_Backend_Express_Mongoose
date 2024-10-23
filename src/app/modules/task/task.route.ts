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

export const taskRoutes = router;
