import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TaskService } from './task.service';
import { Task } from "./task";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskService]
})
export class AppComponent implements OnInit {
  title = 'This app is works!';
  tasks: Task[]

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks() {
    this.taskService
      .getAllTasks()
      .subscribe((tasks) => {
        this.tasks = tasks;
      });
  }

  createTask(description: string) {
    this.taskService
      .createTask(description)
      .subscribe((task) => {
        this.getAllTasks();
      });
  }
}
