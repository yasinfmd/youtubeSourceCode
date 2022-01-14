import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import {RouterModule} from "@angular/router";
import router from "../router";
import {AuthGuard} from "../auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UserdetailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
