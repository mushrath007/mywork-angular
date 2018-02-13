import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroService }          from './hero.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';

import { AppRoutingModule }     from './app-routing.module';
import { ExperimentComponent } from './experiment/experiment.component';
import { AngularTwoFormsComponent } from './angular-two-forms/angular-two-forms.component';
import { AngularTwoInputFieldComponent } from './angular-two-input-field/angular-two-input-field.component';
import { Angular2FormComponent } from './angular2-form/angular2-form.component';
import { NgDatepickerModule } from 'ng2-datepicker';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgDatepickerModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    ExperimentComponent,
    AngularTwoFormsComponent,
    AngularTwoInputFieldComponent,
    Angular2FormComponent
  ],
  providers: [ HeroService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
