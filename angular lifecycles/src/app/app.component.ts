import {AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , DoCheck , AfterViewInit{
  title = 'my-first-project';
  data:string="Yasin"
  constructor() {
    console.log("İlk Ben Çalısırım")
    setTimeout(()=>{
      this.title="Hi"
    },5000)
  }

  ngOnInit() {
    console.log("onInit Çalısıyor Veriler Hazır")
  }

  ngDoCheck(): void {
    console.log("her değişimde çalısırm")
  }

  ngAfterViewInit(): void {
    console.log("View Okey Oldu")
  }




}
