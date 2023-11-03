import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTasks(): Observable<Task[]> {
    // we need to use of from rxjs to turn the TASKS array into an observable
    const tasks = of(TASKS);
    return tasks;
  }
}
