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
    },
    {
        icon: 'fa-bell',
        title: 'alerts',
        numberCard: 9,
        unitIcon: 'fa-bell-o',
        bGColor: '#F39C12',
        moreInfoBG: '#DA8C10'
    },
    {
        icon: 'fa-tasks',
        title: 'tasks',
        numberCard: 10,
        unitIcon: 'fa-pie-chart',
        bGColor: '#2980B9',
        moreInfoBG: '#2573A6'
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