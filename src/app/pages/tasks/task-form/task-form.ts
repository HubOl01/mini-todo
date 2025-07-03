import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../../../shared/task-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styles: ``,
})
export class TaskForm {
  title = '';
  description = '';

  @Output() taskAdded = new EventEmitter<void>();

  constructor(private taskService: TaskService) {}

  onSubmit(): void {
    this.taskService.addTask({
      title: this.title,
      description: this.description,
      status: false,
    });

    this.title = '';
    this.description = '';
    this.taskAdded.emit();
  }
}
