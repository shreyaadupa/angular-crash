//import { Task } from './../../Task';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input()
  task!: Task;
  faTimes = faTimes;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {}

  onDelete(_Task: any)
  {
    this.onDeleteTask.emit(this.task);
  }

  onToggle(_Task: any)
  {
    this.onToggleReminder.emit(this.task);
  }

}
