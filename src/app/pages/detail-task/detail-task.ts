import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TaskService } from '../../shared/task-service';
import { Task } from '../../shared/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-task',
  imports: [CommonModule, RouterModule],
  templateUrl: './detail-task.html',
  styles: ``,
})
export class DetailTask implements OnInit {
  task?: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTask(id);
  }

  onChangeTask() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.changeStatusTask(id);
  }
}
