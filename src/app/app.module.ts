import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';
import { FirstExoComponent } from './first-exo/first-exo.component';
import { SecondExoComponent } from './second-exo/second-exo.component';

@NgModule({
  declarations: [
    AppComponent,
    WhoAmIComponent,
    FirstExoComponent,
    SecondExoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
