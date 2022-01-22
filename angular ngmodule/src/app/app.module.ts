import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {DenemeModule} from "./deneme/deneme.module";
import {AppRouterModule} from "./app-router.module";
  //shared module
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    /*DenemeModule,*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
