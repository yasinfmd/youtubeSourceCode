import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  number1:number=10
  ngOnInit(): void {

    setTimeout(()=>{
      this.number1=30
    },1000*2)
  }

}
