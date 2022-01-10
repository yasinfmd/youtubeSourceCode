import {Component, OnInit} from '@angular/core';
import {LogService} from "./log.service";
import {OtoService} from "./oto.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LogService]
})
export class AppComponent implements OnInit{
  title = 'my-first-project';
  appLogs:String [] = []
  constructor(private logService:LogService,private otoService:OtoService) {
  }

  ngOnInit(): void {
    this.appLogs=this.logService.logs
    this.otoService.deneme()
  }
}
