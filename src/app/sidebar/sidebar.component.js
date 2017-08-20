"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tabs = [
    {
        title: 'i18n.DASHBOARD',
        index: 1,
        icon: 'fa-dashboard'
    },
    {
        title: 'Chart',
        index: 2,
        icon: 'fa-bar-chart',
        submenu: [
            {
                title: 'FlotChart',
                index: 1
            },
            {
                title: 'Morris.js',
                index: 2
            }
        ]
    },
    {
        title: 'Forms',
        index: 3,
        icon: 'fa-edit',
        submenu: [
            {
                title: 'Basic Elements',
                index: 1
            },
            {
                title: 'Advanced Elements',
                index: 2
            }
        ]
    },
    {
        title: 'Calendar',
        index: 4,
        icon: 'fa-calendar'
    },
    {
        title: 'Tables',
        index: 5,
        icon: 'fa-table',
        submenu: [
            {
                title: 'Basic Tables',
                index: 1
            },
            {
                title: 'Advanced Tables',
                index: 2
            }
        ]
    }
];
var SideBarComponent = (function () {
    function SideBarComponent() {
        this.tabs = tabs;
        this.selectedTabIndex = 0;
        this.selectedSubTabIndex = 0;
    }
    SideBarComponent.prototype.onSelectTab = function (tabindex) {
        if (this.selectedTabIndex === tabindex) {
            this.selectedTabIndex = 0;
            return;
        }
        if (this.selectedTabIndex !== 0) {
            this.selectedSubTabIndex = 0;
        }
        this.selectedTabIndex = tabindex;
    };
    SideBarComponent.prototype.onSelectSubMenu = function (subTabIndex) {
        if (this.selectedSubTabIndex === subTabIndex) {
            return;
        }
        this.selectedSubTabIndex = subTabIndex;
    };
    return SideBarComponent;
}());
SideBarComponent = __decorate([
    core_1.Component({
        selector: 'side-bar',
        templateUrl: './sidebar.component.html'
    })
], SideBarComponent);
exports.SideBarComponent = SideBarComponent;
//# sourceMappingURL=sidebar.component.js.map