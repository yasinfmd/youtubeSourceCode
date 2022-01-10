import {EventEmitter, Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export  class LogService{
  logs:String []  = ["Log 1","Log2"]
  name:EventEmitter<string> = new EventEmitter<string>()
  myData=new Subject<String>()
  addLogs(text:string){
    this.logs.push(text)
  }
}
