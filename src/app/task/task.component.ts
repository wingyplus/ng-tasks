import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input()
  description: string;

  @Input()
  done: boolean;

  constructor() {
    this.description = 'New task';
    this.done = false;
  }

  ngOnInit() {
  }

}
