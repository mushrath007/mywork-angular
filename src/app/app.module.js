var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var forms_2 = require('@angular/forms');
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var hero_service_1 = require('./hero.service');
var message_service_1 = require('./message.service');
var messages_component_1 = require('./messages/messages.component');
var app_routing_module_1 = require('./app-routing.module');
var experiment_component_1 = require('./experiment/experiment.component');
var angular_two_forms_component_1 = require('./angular-two-forms/angular-two-forms.component');
var angular_two_input_field_component_1 = require('./angular-two-input-field/angular-two-input-field.component');
var angular2_form_component_1 = require('./angular2-form/angular2-form.component');
var ng2_datepicker_1 = require('ng2-datepicker');
var angular_two_forms_2_component_1 = require('./angular-two-forms-2/angular-two-forms-2.component');
var about_me_component_1 = require('./about-me/about-me.component');
var ng2_carouselamos_1 = require('ng2-carouselamos');
var portfolio_component_1 = require('./portfolio/portfolio.component');
var lib_module_1 = require('./lib/lib.module');
var services_component_1 = require('./services/services.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                forms_2.ReactiveFormsModule,
                ng2_datepicker_1.NgDatepickerModule,
                ng2_carouselamos_1.Ng2CarouselamosModule,
                lib_module_1.LibraryModule
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                messages_component_1.MessagesComponent,
                experiment_component_1.ExperimentComponent,
                angular_two_forms_component_1.AngularTwoFormsComponent,
                angular_two_input_field_component_1.AngularTwoInputFieldComponent,
                angular2_form_component_1.Angular2FormComponent,
                angular_two_forms_2_component_1.AngularTwoForms2Component,
                about_me_component_1.AboutMeComponent,
                portfolio_component_1.PortfolioComponent,
                services_component_1.ServicesComponent
            ],
            providers: [hero_service_1.HeroService, message_service_1.MessageService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map