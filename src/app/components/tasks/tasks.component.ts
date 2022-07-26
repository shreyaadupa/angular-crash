import { TaskService } from './../../services/task.service';
import { Task } from './../../Task';
import { TASKS } from './../../mock.tasks';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((mocktasks) => this.tasks = mocktasks);
  }

  deleteTask(task: Task)
  {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t=> t.id !== task.id));
  }

  toggleReminder(task: Task)
  {
    task.reminder = !task.reminder;
    console.log(task.reminder);
  }


}
