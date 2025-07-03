import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private idCounter = 1;

  constructor() {}

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): any {
    return this.tasks.find((t) => t.id === id);
  }

  addTask(task: Omit<Task, 'id'>): void {
    this.tasks.push({ ...task, id: this.idCounter++ });
  }
  changeStatusTask(id: number): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.status = !task.status;
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}
