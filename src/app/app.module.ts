import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent }  from './app.component';
import { DashboardComponent }from './dashboard/dashboard.component';
import { StatisticCardComponent } from './../common/statisticCard/statisticCard.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient, HttpClientModule} from "@angular/common/http";

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
    })
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
