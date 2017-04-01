import { Component, OnInit } from '@angular/core';

class Task {
  description: string;
  done: boolean;

  constructor(description: string, done: boolean) {
    this.description = description;
    this.done = done;
  }
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Array<Task>;

  constructor() {
    this.tasks = [
      new Task('Learn Angular', false),
      new Task('Learn Angular 2', false),
      new Task('Learn Angular 4', true)
    ];
  }

  ngOnInit() {
  }

}
