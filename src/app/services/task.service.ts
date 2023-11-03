import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';
// angular being a framework uses an http client to make requests to a server, not fetch or axios like in react
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  // by adding http as a provider, we got access to all of the methods of HttpClient
  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    // we need to use of from rxjs to turn the TASKS array into an observable
    return this.http.get<Task[]>(this.apiUrl)
  }
}
