import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  /* The next method on a Subject is used to emit a value to all its subscribers.  */
  /* By emitting a value using next, you are essentially notifying all interested parties
  of a change in state. This pattern is particularly useful for communication between components
  that are not directly related, like siblings or components with a parent-child relationship that's too distant. */
  private subject = new Subject<any>();
  constructor() { }
  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }
  /* By default, a Subject in RxJS is both an Observable and an Observer. This means it has methods like next(),
  error(), and complete(), which can be used to emit values, errors, or complete the stream.
  However, in many cases, you don't want to expose the ability to emit values to the consumers of the Subject.
  Using asObservable() creates an Observable from the Subject, which only exposes the Observable part, not the Observer part.
  This means other parts of your application can subscribe to the Observable and receive updates, but they cannot emit new values or complete the Subject */
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
