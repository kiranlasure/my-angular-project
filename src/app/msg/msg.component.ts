import { Component, OnInit } from '@angular/core'




@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.scss']
})
export class MsgComponent implements OnInit {

  
  title = 'This is My first web Page';
  p = 'this is my first pargraph n i m writing something in this';
  name: string = '';
  constructor() { }

   ngOnInit() {

    }
  }