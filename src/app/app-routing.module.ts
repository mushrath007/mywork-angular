import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import {ExperimentComponent} from "./experiment/experiment.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'experiment', component: ExperimentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
