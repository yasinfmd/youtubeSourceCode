import { Component, OnInit } from '@angular/core';
import {LogService} from "../log.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],

})
export class TestComponent implements OnInit {
  customData:any=""
  appLogs:String [] = []
  constructor(private logService:LogService) {
  }

  ngOnInit(): void {
    this.appLogs=this.logService.logs
    this.logService.myData.subscribe((x)=>{
      console.log("Test",x)
      this.customData=x
    })
  }
  addNewLog(){
    this.logService.addLogs("Test Loguu")
  }

  changeName(){
    this.logService.name.emit("Test Üzerinden Değişen Bir İsim Mevcut")
  }

}
