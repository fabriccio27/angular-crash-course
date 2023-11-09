import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
/* the exclamation mark allows having the variable not initialized in the constructor */
  @Input() task!: Task;
  /* This is a decorator in Angular that marks a property as an "output" property.
  Output properties are used to pass data from a child component to a parent component in Angular's component hierarchy. */
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  constructor() { }
  ngOnInit(): void {}
  /* I don't want to have service calls from within a child component,
  so we're going to emit an event and make the call in the parent */
  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
}
