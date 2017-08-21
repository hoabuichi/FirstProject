"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); // <-- NgModel lives here
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var statisticCard_component_1 = require("./../common/statisticCard/statisticCard.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var http_1 = require("@angular/common/http");
var calendar_component_1 = require("./calendar/calendar.component");
var flotChart_component_1 = require("./FlotChart/flotChart.component");
var morrisJs_component_1 = require("./morrisJs/morrisJs.component");
var basicElements_component_1 = require("./form/basicElements.component");
var advanceElements_component_1 = require("./form/advanceElements.component");
var basicTables_component_1 = require("./table/basicTables.component");
var advancedTables_component_1 = require("./table/advancedTables.component");
// AoT requires an exported function for factories
function HttpLoaderFactory(httpClient) {
    return new http_loader_1.TranslateHttpLoader(httpClient, "i18n/", ".json");
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpClientModule,
            core_2.TranslateModule.forRoot({
                loader: {
                    provide: core_2.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [http_1.HttpClient]
                }
            }),
            router_1.RouterModule.forRoot([
                {
                    path: 'dashboard',
                    component: dashboard_component_1.DashboardComponent
                },
                {
                    path: 'calendar',
                    component: calendar_component_1.CalendarComponent
                },
                {
                    path: 'flotchart',
                    component: flotChart_component_1.FlotChartComponent
                },
                {
                    path: 'morris',
                    component: morrisJs_component_1.MorrisJsComponent
                },
                {
                    path: 'basicElm',
                    component: basicElements_component_1.BasicElementsComponent
                },
                {
                    path: 'advancedElm',
                    component: advanceElements_component_1.AdvancedElementsComponent
                },
                {
                    path: 'basicTab',
                    component: basicTables_component_1.BasicTablesComponent
                },
                {
                    path: 'advancedTab',
                    component: advancedTables_component_1.AdvancedTablesComponent
                }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            statisticCard_component_1.StatisticCardComponent,
            sidebar_component_1.SideBarComponent,
            calendar_component_1.CalendarComponent,
            flotChart_component_1.FlotChartComponent,
            morrisJs_component_1.MorrisJsComponent,
            basicElements_component_1.BasicElementsComponent,
            advanceElements_component_1.AdvancedElementsComponent,
            basicTables_component_1.BasicTablesComponent,
            advancedTables_component_1.AdvancedTablesComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map