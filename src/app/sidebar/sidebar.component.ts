import { Component, Input } from '@angular/core'

const tabs = [
    {
        title : 'DashBoard',
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
        title : 'Calendar',
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
@Component ({
    selector: 'side-bar',
    templateUrl: './sidebar.component.html'
})

export class SideBarComponent {
    tabs = tabs;
    selectedTabIndex: number = 0;

    onSelectTab(tabindex): void {
        if(this.selectedTabIndex === tabindex) {
            this.selectedTabIndex = 0;
            return;
        }
        this.selectedTabIndex = tabindex;
    }
}