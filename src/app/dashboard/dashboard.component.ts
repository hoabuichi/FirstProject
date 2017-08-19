import { Component, Input } from '@angular/core';
import { StatisticCardComponet } from './../commonComponent/statisticCard/statisticCard.component'

@Component ({
    selector: 'dashboard',
    template: `
    <div>
        <statistic-card></statistic-card>
    </div>`
})

export class DashboardComponent {

}