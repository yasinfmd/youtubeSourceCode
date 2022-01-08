import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomDirectiveDirective } from './custom-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveDirective,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
