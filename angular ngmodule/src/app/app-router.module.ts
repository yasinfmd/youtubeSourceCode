import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home/home.component";


const routes:Routes=[
  {path:"", component:HomeComponent},
  {path:'',loadChildren:()=>import('./deneme/deneme.module').then((m)=>m.DenemeModule)}
]


@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    RouterModule.forRoot(routes,{
      preloadingStrategy:PreloadAllModules
    })
  ],
  exports:[RouterModule]
})

export class AppRouterModule{}
