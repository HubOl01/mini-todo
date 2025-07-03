import { Routes } from '@angular/router';
import { Tasks } from './pages/tasks/tasks';
import { DetailTask } from './pages/detail-task/detail-task';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  {
    path: 'tasks',
    component: Tasks,
  },
  {
    path: 'tasks/:id',
    component: DetailTask,
  },
];
