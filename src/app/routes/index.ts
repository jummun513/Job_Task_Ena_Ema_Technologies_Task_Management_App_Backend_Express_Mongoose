import { Router } from 'express';
import { taskRoutes } from '../modules/task/task.route';
import { tasksRoutes } from '../modules/tasks/tasks.route';
import { categoriesRoutes } from '../modules/categories/categories.routes';

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
  {
    path: '/categories',
    route: categoriesRoutes,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
