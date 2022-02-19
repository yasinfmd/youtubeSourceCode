import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('customAnimation',[
      state('default',style({
        'background-color':'red',
        'width':'100px',
        'height':'100px',
        'transform':'translateX(0)'
      })),
      state('custom',style({
        'background-color':'purple',
        'width':'300px',
        'height':'300px',
        'transform':'translateX(500px)',
      })),
      transition('default <=> custom',animate(500)),
     /* transition('custom => default',animate(500))*/

    ])
  ]
})
export class AppComponent {
  animationState='default'


  playAnimation(){
    this.animationState=this.animationState==='default'?'custom':'default'
  }

}
