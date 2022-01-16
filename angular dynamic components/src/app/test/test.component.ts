import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input("title") title=""

  @Output() test=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    console.log("y")
  }

  click(){
    console.log("Tıklandı")
    this.test.emit("Yasin")
  }
}
