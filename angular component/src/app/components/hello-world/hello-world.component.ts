import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-hello-world',
  // selector:'.appHelloWorld',
  // selector:'[appHelloWorld]',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  @Input() messageName: string = ""
  @Input("parentName") customMessage: string = ""

  @Output() clickEventMessage = new EventEmitter<string>();

  @Output("customClick") clickOtherEventMessage=new EventEmitter<string>();


  sendParentOnClick(){
    this.clickEventMessage.emit("Butona Tıklandı Child Componentden")
    this.clickOtherEventMessage.emit("İsimlendirilmiş Tıklama")
  }

  componentName: string = "Hello World Componentiyim"
}
