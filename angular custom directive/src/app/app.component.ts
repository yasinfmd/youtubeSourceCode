import {AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor() {
  }

  test(){
    console.log("Hi")
  }
  ngOnInit() {
  }


}
