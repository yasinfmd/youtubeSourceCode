import {Component, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //encapsulation:ViewEncapsulation.ShadowDom
//  encapsulation:ViewEncapsulation.None
  encapsulation:ViewEncapsulation.ShadowDom //default

})
export class AppComponent implements  OnInit{
  myArray:Array<string> =["Yasin","Ali","Veli"]
  ngOnInit(): void {

  }

}
