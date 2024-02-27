import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FeatherIconModule } from 'src/app/core/feather-icon/feather-icon.module';
import { NgbDropdownModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

// Ng-ApexCharts
import { NgApexchartsModule } from "ng-apexcharts";

import { DashboardComponent } from './dashboard.component';
import { DailyGraphicComponent } from '../daily-graphic/daily-graphic.component';
import { MinutelyGraphicComponent } from '../minutely-graphic/minutely-graphic.component';
import { HourlyGraphicComponent } from '../hourly-graphic/hourly-graphic.component';
import { DummyPageComponent } from '../dummy-page/dummy-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {path : 'daily-graphic', component:DailyGraphicComponent},
  {path : 'hourly-graphic', component:HourlyGraphicComponent},
  {path : 'minutely-graphic', component:MinutelyGraphicComponent},
  {path : 'dummy-page', component:DummyPageComponent},
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    FeatherIconModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    NgApexchartsModule
  ]
})
export class DashboardModule { }
