import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent }  from './app.component';
import { DashboardComponent }from './dashboard/dashboard.component';
import { StatisticCardComponent } from './../common/statisticCard/statisticCard.component';
import { SideBarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    StatisticCardComponent,
    SideBarComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
