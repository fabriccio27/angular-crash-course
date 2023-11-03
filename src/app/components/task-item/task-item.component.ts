import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
/* the exclamation mark allows having the variable not initialized in the constructor */
@Input() task!: Task;
constructor() { }
ngOnInit(): void {}
}