import {AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  value:number=10
  constructor() {
  }

  changeNumber(num:number){
    this.value=num
  }
  ngOnInit() {
  }


}
