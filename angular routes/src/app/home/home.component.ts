import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.data.subscribe((x)=>{
      console.log("statik",x)
    })
  }

}
