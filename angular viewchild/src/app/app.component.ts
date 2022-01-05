import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {TestComponent} from "./test/test.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements  OnInit , AfterViewInit{
  @ViewChild('elRef' ,{static:true}) elRef:ElementRef | undefined;

  @ViewChild(TestComponent,{static:true}) testRef:ElementRef | undefined;
  ngOnInit(): void {
      console.log("elRef",this.elRef)
    console.log("compRef",this.testRef)
  }

  ngAfterViewInit(): void {
    console.log("elref viewinit",this.elRef)
    console.log("compRef",this.testRef)

  }

}
