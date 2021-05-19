import { style } from '@angular/animations';
import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input()
  tasks: Task[];

  @Output()
  remove = new EventEmitter<number>();

  removeTask(taskIdx: number) {
    if (window.confirm('Are sure you want to delete this item?')) {
      this.remove.emit(taskIdx);
    }
  }

  doneTask(taskIdx: number) {
    this.tasks.forEach(task => {
        if(task.id == taskIdx) task.completed = true;
    })    
  }
}
