import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Task } from './task';
import { environment } from '../environments/environment';

@Injectable()
export class TaskService {

  constructor(private http: Http) {
    console.log("new task service");
  }

  getAllTasks(): Observable<Task[]> {
    return this.http
      .get(`${environment.url}/todos`)
      .map((resp) => {
        return resp.json() as Task[];
      });
  }

  createTask(description: string): Observable<Task> {
    return this.http
      .post(`${environment.url}/todos`, {
        description: description,
        done: false
      })
      .map((resp) => {
        return resp.json() as Task;
      });
  }

}
