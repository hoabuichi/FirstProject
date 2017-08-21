import { Component, Input } from '@angular/core'
import { Tab } from './tab'

const tabs: Tab[] = [
    {
        title : 'i18n.DASHBOARD',
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
        title : 'calendar',
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
@Component ({
    selector: 'side-bar',
    templateUrl: './sidebar.component.html'
})

export class SideBarComponent {
    tabs : Tab[] = tabs;
    currentState: string;
    selectedTabIndex: number = 0;
    selectedSubTabIndex: number = 0;

    onSelectTab(tabindex: number): void {
        if(this.selectedTabIndex === tabindex) {
            this.selectedTabIndex = 0;
            return;
        }
        this.selectedTabIndex = tabindex;
        if(tabs[tabindex - 1].state) {
            this.currentState = tabs[tabindex -1].state;
        }
    }

    onSelectSubMenu(subTabIndex: number): void {
        let submenu = tabs[this.selectedTabIndex - 1].submenu;
        if(submenu[subTabIndex - 1].state === this.currentState) {
            return;
        }
        this.selectedSubTabIndex = subTabIndex;
        this.currentState = submenu[subTabIndex -1].state;
    }
}