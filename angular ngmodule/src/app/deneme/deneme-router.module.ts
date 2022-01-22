import {RouterModule, Routes} from "@angular/router";
import {DenemeComponent} from "./deneme/deneme.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";


const routes:Routes=[
  {path:"deneme", component:DenemeComponent}
]


@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})

export class DenemeRouterModule{}
