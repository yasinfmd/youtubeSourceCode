import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnChanges , OnDestroy {
  @Input() msg=""
  constructor() { }

  ngOnInit(): void {
    console.log("test ng on init")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes,"NgOnChanges")
  }

  ngOnDestroy(): void {
    console.log("ölüyorummmm :(")
  }

}
