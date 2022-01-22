import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DenemeComponent } from './deneme/deneme.component';
import {DenemeRouterModule} from "./deneme-router.module";



@NgModule({
  declarations: [
    DenemeComponent
  ],
  exports: [
    DenemeComponent
  ],
  imports: [
    CommonModule,
    DenemeRouterModule
  ]
})
export class DenemeModule { }
