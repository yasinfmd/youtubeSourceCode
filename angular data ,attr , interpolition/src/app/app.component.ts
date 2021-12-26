import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  btnDisabled=false
  pInnerText="P Elementi Inner Text"
  inputVal="yasin"
  ngOnInit(): void {
    setTimeout(()=>{
        this.btnDisabled=true
    },1000*15)
  }
  title = 'my-first-project';
  onInput(event:Event){
    console.log("event",event)
    console.log("input oluyor")
  }

  clickCustomBtn(){
    alert(this.inputVal)
  }
  myName="Yasin";
  clicked(str:string){
    alert(str)
  }
}
