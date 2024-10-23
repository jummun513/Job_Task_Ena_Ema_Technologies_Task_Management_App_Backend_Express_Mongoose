import { Router } from 'express';
import { taskRoutes } from '../modules/task/task.route';
import { tasksRoutes } from '../modules/tasks/tasks.route';

const router = Router();

const modulesRoutes = [
  {
    path: '/task',
    route: taskRoutes,
  },
  {
    path: '/tasks',
    route: tasksRoutes,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
