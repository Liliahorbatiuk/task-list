import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-list';
  task: string = '';
  sendTask: string;
  tasks = {};
  status: boolean = false;
  list: Array<any> = [
    this.tasks = {
      task: 'HTML5',
      progress: 'Done',
      status: true
    },
    this.tasks = {
      task: 'CSS3',
      progress: 'Done',
      status: true
    },
    this.tasks = {
      task: 'SCSS',
      progress: 'In PROGRESS',
      status: false
    },
    this.tasks = {
      task: 'JavaScript',
      progress: 'In PROGRESS',
      status: false
    },
    this.tasks = {
      task: 'JQuery',
      progress: 'In PROGRESS',
      status: false
    },
    this.tasks = {
      task: 'Angular',
      progress: 'In PROGRESS',
      status: false
    },
  ];
  count = this.list.length;
  progress: string = 'IN PROGRESS';

  add(): void {
    if(this.task !== ''){
      this.tasks = {
        task: this.task,
        progress: this.progress,
        status: this.status
      }
    }
    this.list.push(this.tasks)
    this.task = '';
    this.count = this.list.length;
  }
  getCount(count: number): void{
    this.count = count;
  }
}
