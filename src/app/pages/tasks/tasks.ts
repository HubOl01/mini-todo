import { Component, OnInit } from '@angular/core';
import { TaskForm } from './task-form/task-form';
import { Task } from '../../shared/task.model';
import { TaskService } from '../../shared/task-service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tasks',
  imports: [TaskForm, CommonModule, RouterModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit {
  tasks: Task[] = [];
  isAdd: boolean = false;

  constructor(private taskService: TaskService) {}

  onClickAdd(): void {
    this.isAdd = !this.isAdd;
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.loadTasks();
  }
}
