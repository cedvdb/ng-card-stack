import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimatedCardStackModule } from 'ng-animated-card-stack';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AnimatedCardStackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
