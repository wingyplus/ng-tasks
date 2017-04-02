import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Task } from './task';

@Injectable()
export class TaskService {

  constructor(private http: Http) {
    console.log("new task service");
  }

  getAllTasks(): Observable<Task[]> {
    return this.http
      .get('http://localhost:3000/todos')
      .map((resp) => {
        return resp.json() as Task[];
      });
  }

}
