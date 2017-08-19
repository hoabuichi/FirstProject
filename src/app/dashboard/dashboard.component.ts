import { Component, Input } from '@angular/core';
import { StatisticCardComponent } from '../../common/statisticCard/statisticCard.component';
import { StatisticCard } from '../../common/statisticCard/statisticCard';

const Cards: StatisticCard[] = [
    {
        icon: 'fa-users',
        title: 'users',
        numberCard: 267,
        unitIcon: 'fa-signal',
        bGColor: '#34495E',
        moreInfoBG: '#2F4254'
    },
    {
        icon: 'fa-money',
        title: 'revenue',
        numberCard: 32.384,
        unitIcon: 'fa-dollar',
        bGColor: '#16A085',
        moreInfoBG: '#149077'
    }
];

@Component ({
    selector: 'dashboard',
    template: `
    <div *ngFor="let card of cards" class="card-detail">
        <statistic-card [card]="card"></statistic-card>
    </div>`
})

export class DashboardComponent {
    cards = Cards;
}