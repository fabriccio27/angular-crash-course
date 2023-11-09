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
  // saying that the request will return an observable has several implications
  // 1. the operation will be asynchronous. The method will return immediately and the Observable will emit a value sometime in the future
  // 2. the observable represents a stream of data that will be emitted over time. In this case we expect it to emmit a single value
  // 3. Subscribing: To actually send the HTTP request and handle the result, you must subscribe to the Observable.
  // The subscription triggers the execution of the HTTP request, and the provided callback functions will be called when the request succeeds, fails, or when the Observable completes.
  // 4. adds capabilities to handle errors
  // 5. Cancellation: An Observable can be canceled. If you have the reference to the subscription, you can unsubscribe
  // before the HTTP request completes. This is particularly useful for avoiding unwanted operations if the component is destroyed or if the user navigates away from the page before the operation completes.
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
