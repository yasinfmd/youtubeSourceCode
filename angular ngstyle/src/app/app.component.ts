import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  fontSize:string="60px"
  color:string="purple"
  myStyleObj:{color:string,fontSize:string,fontWeight:string,backgroundColor?:string}={fontWeight:"bold",fontSize:"70px",color:"#fff",backgroundColor:"#000"}
  customColor:string="red"
  myClass:string="myClass"
  ngOnInit(): void {

  }

}
