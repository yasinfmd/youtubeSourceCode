import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {increment} from "./test.actions";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  constructor(private store:Store<{count:number}>) {
  }
  ngOnInit(): void {
  }

  incrementCount(){
    this.store.dispatch(increment({payload:10}))
  }

}
