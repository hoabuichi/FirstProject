import { Component, OnInit } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <side-bar></side-bar>
  <router-outlet></router-outlet>
  <select #langSelect (change)="translate.use(langSelect.value)">
     <option *ngFor="let lang of translate.getLangs()" [value]="lang" [selected]="lang === translate.currentLang">{{ lang }}</option>
  </select>
  `
})
export class AppComponent implements OnInit {
  title = 'Angular 2';

  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    
  }
}
