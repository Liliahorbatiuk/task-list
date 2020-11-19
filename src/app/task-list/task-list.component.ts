import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() getTask: Array<any> = []; 
  @Output() count: EventEmitter<number> = new EventEmitter<number>();
  inputSave:string;
  save: boolean = false;
  num: number;

  constructor() { }

  ngOnInit(): void {
  }

  change(i): void {
    if (this.getTask[i].status === false){
      this.getTask[i].progress = 'DONE';
      this.getTask[i].status = true;
    }
    else{
      this.getTask[i].progress = 'IN PROGRESS';
      this.getTask[i].status = false;
    }
  }

  delete(index: number): void{
    this.getTask.splice(index, 1);
    this.count.emit(this.getTask.length);
  }

  edit(index: number): void {
    this.save = true;
    this.inputSave = this.getTask[index].task;
    this.num = index;
  }

  saveBtn(): void {
    this.getTask[this.num].task = this.inputSave;
    this.save = false;
  } 

}
