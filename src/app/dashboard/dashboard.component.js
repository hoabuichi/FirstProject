"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Cards = [
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
var DashboardComponent = (function () {
    function DashboardComponent() {
        this.cards = Cards;
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'dashboard',
        template: "\n    <div *ngFor=\"let card of cards\" class=\"card-detail\">\n        <statistic-card [card]=\"card\"></statistic-card>\n    </div>"
    })
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map