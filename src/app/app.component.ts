import { Component, OnInit } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'my-app',
  template: `<div class="angular-2-app">
      <side-bar class="col-lg-3"></side-bar>
      <router-outlet class="col-lg-9"></router-outlet>
      <select #langSelect (change)="translate.use(langSelect.value)" class="language-area">
         <option *ngFor="let lang of translate.getLangs()" [value]="lang" [selected]="lang === translate.currentLang">{{ lang }}</option>
      </select>
  </div>

  `
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    
  }
}
