import { Component, OnInit } from '@angular/core';
import {LogService} from "../log.service";

@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.css'],
})
export class DenemeComponent implements OnInit {
  customName:string=""
  appLogs:String [] = []
  constructor(private logService:LogService) {
  }

  ngOnInit(): void {
    this.appLogs=this.logService.logs
    this.logService.name.subscribe((x)=>{

      this.customName=x

    })
    this.logService.myData.subscribe((x)=>{
      console.log("Deneme",x)
    })
  }

  changeNameWithRxjs(){
    this.logService.myData.next("Deneme Üzerinden İsim Değşşltirdim")
    setTimeout(()=>{
      this.logService.myData.next("5 saniye geçti")
    },5000)
  }
  addNewLog(){
    this.logService.addLogs("Deneme Loguu")
  }
}
