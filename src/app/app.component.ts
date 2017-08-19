import { Component, OnInit } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <dashboard></dashboard>`
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  ngOnInit(): void {
    
  }
}
