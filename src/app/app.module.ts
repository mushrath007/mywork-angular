import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroService }          from './hero.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';

import { AppRoutingModule }     from './app-routing.module';
import { ExperimentComponent } from './experiment/experiment.component';
import { AngularTwoFormsComponent } from './angular-two-forms/angular-two-forms.component';
import { AngularTwoInputFieldComponent } from './angular-two-input-field/angular-two-input-field.component';
import { Angular2FormComponent } from './angular2-form/angular2-form.component';
import { NgDatepickerModule } from 'ng2-datepicker';
import { AngularTwoForms2Component } from './angular-two-forms-2/angular-two-forms-2.component';
import { AboutMeComponent } from './about-me/about-me.component';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LibraryModule } from './lib/lib.module';
import { ServicesComponent } from './services/services.component';
import * as Typed from 'typed.js';

import { MyWorksComponent } from './my-works/my-works.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgDatepickerModule,
    Ng2CarouselamosModule,
    LibraryModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MessagesComponent,
    ExperimentComponent,
    AngularTwoFormsComponent,
    AngularTwoInputFieldComponent,
    Angular2FormComponent,
    AngularTwoForms2Component,
    AboutMeComponent,
    PortfolioComponent,
    ServicesComponent,
    MyWorksComponent
  ],
  providers: [ HeroService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
