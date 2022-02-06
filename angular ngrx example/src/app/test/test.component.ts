import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  myNumber:number=0
  num:Observable<number>=this.store.select((state)=>state.count)
  constructor(private store:Store<{count:number}>) { }

  ngOnInit(): void {

    this.num.subscribe((x)=>{
      this.myNumber=x
      console.log('x',x)
    })
  }

}
