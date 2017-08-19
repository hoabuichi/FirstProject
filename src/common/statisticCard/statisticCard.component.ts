/**
 * Created by BUICHIHOA on 8/19/2017.
 */
import { Component, Input } from '@angular/core';
import { StatisticCard } from './statisticCard';

@Component ({
    selector: 'statistic-card',
    templateUrl: './statisticCard.component.html'
})

export class StatisticCardComponent {
    @Input() card: StatisticCard;
}