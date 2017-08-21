import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { DashboardComponent }from './dashboard/dashboard.component';
import { StatisticCardComponent } from './../common/statisticCard/statisticCard.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CalendarComponent } from './calendar/calendar.component';
import {FlotChartComponent } from './FlotChart/flotChart.component';
import { MorrisJsComponent } from './morrisJs/morrisJs.component';
import { BasicElementsComponent } from './form/basicElements.component';
import { AdvancedElementsComponent } from './form/advanceElements.component';
import { BasicTablesComponent } from './table/basicTables.component';
import { AdvancedTablesComponent } from './table/advancedTables.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "i18n/", ".json");
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'calendar',
        component: CalendarComponent
      },
      {
        path: 'flotchart',
        component: FlotChartComponent
      },
      {
        path: 'morris',
        component: MorrisJsComponent
      },
      {
        path: 'basicElm',
        component: BasicElementsComponent
      },
      {
        path: 'advancedElm',
        component: AdvancedElementsComponent
      },
      {
        path: 'basicTab',
        component: BasicTablesComponent
      },
      {
        path: 'advancedTab',
        component: AdvancedTablesComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    StatisticCardComponent,
    SideBarComponent,
    CalendarComponent,
    FlotChartComponent,
    MorrisJsComponent,
    BasicElementsComponent,
    AdvancedElementsComponent,
    BasicTablesComponent,
    AdvancedTablesComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
