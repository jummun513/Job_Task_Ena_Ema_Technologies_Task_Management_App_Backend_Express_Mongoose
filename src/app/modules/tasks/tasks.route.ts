import express from 'express';
import { tasksControllers } from './tasks.controller';

const router = express.Router();

router.get('/', tasksControllers.getExpectedTasks);

export const tasksRoutes = router;
