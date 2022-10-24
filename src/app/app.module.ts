import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';
import { FirstExoComponent } from './first-exo/first-exo.component';
import { SecondExoComponent } from './second-exo/second-exo.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';
import { TableComponent } from './second-exo/table/table.component';
import { RowComponent } from './second-exo/table/row/row.component';
import { CompteurComponent } from './compteur/compteur.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalHeaderComponent,
    WhoAmIComponent,
    FirstExoComponent,
    SecondExoComponent,
    TableComponent,
    RowComponent,
    CompteurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
