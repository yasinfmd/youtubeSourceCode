import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {TestDirective} from "./test.directive";
import {TestComponent} from "./test/test.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(TestDirective,{static:false}) testHost:TestDirective|undefined;
  title = 'my_first_project';

  constructor(private componentFactoryResolver:ComponentFactoryResolver) {
  }

  render(){

    const viewContainerRef=this.testHost?.viewContainerRef
    viewContainerRef?.clear()


    const componentFactory=this.componentFactoryResolver.resolveComponentFactory<TestComponent>(TestComponent)
    const componentRef=viewContainerRef?.createComponent<TestComponent>(componentFactory)
    if(componentRef){
      componentRef.instance.title="Yasin"
      componentRef.instance.ngOnInit()
      componentRef.instance.test.subscribe((x)=>{
        viewContainerRef?.clear()
      })
    }


    //console.log("compoenntFactory",componentFactory)
  }
}
