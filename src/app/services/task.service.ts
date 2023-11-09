import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/Task';
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
    // <Task[]>: This is a TypeScript generic type annotation. It tells TypeScript that the expected response from the HTTP GET request is an array of Task objects. This helps with type checking and autocompletion in your development environment.
    return this.http.get<Task[]>(this.apiUrl)
  }
}
