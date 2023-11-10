import { Component } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
/* in order to use a service you have to add it as a provider to the constructor */
export class TasksComponent {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // this is the way to tell that whenever the component calls getTasks(), the result of that will be set to this.tasks
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
    /*
    The subscribe method is used to subscribe to the Observable.
    This sets up a subscription, and the provided function (tasks => this.tasks = tasks)
    is the callback that executes when the Observable emits a value (in this case, an array of Task objects). */
  }
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id));
  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

}
