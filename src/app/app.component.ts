import { Component, OnInit } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <dashboard></dashboard>
  <side-bar></side-bar>
  `
})
export class AppComponent implements OnInit {
  title = 'Dashboard';

  ngOnInit(): void {
    
  }
}
