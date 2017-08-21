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
        icon: 'fa-dashboard',
        state: 'dashboard',
        submenu: null
    },
    {
        title: 'Chart',
        index: 2,
        icon: 'fa-bar-chart',
        state: null,
        submenu: [
            {
                title: 'FlotChart',
                index: 1,
                state: 'flotchart'
            },
            {
                title: 'Morris.js',
                index: 2,
                state: 'morris'
            }
        ]
    },
    {
        title: 'Forms',
        index: 3,
        icon: 'fa-edit',
        state: null,
        submenu: [
            {
                title: 'Basic Elements',
                index: 1,
                state: 'basicElm'
            },
            {
                title: 'Advanced Elements',
                index: 2,
                state: 'advancedElm'
            }
        ]
    },
    {
        title: 'calendar',
        index: 4,
        icon: 'fa-calendar',
        state: 'calendar',
        submenu: null
    },
    {
        title: 'Tables',
        index: 5,
        icon: 'fa-table',
        state: null,
        submenu: [
            {
                title: 'Basic Tables',
                index: 1,
                state: 'basicTab'
            },
            {
                title: 'Advanced Tables',
                index: 2,
                state: 'advancedTab'
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
        this.selectedTabIndex = tabindex;
        if (tabs[tabindex - 1].state) {
            this.currentState = tabs[tabindex - 1].state;
        }
    };
    SideBarComponent.prototype.onSelectSubMenu = function (subTabIndex) {
        var submenu = tabs[this.selectedTabIndex - 1].submenu;
        if (submenu[subTabIndex - 1].state === this.currentState) {
            return;
        }
        this.selectedSubTabIndex = subTabIndex;
        this.currentState = submenu[subTabIndex - 1].state;
    };
    SideBarComponent.prototype.activeState = function (tab) {
        if (tab.state === this.currentState) {
            return true;
        }
        if (tab.submenu) {
            for (var menu in tab.submenu) {
                if (tab.submenu[menu].state === this.currentState) {
                    return true;
                }
            }
        }
        return false;
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