import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GraficosModule } from '../graficos/graficos.module';




@NgModule({
  declarations: [
    DashboardComponent,
    CalendarComponent,
    PagesComponent,
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    SharedModule,
   NgxChartsModule,
   FullCalendarModule,
   FormsModule,
   ReactiveFormsModule,
   GraficosModule
  ],
  exports:[
    DashboardComponent,
    CalendarComponent,
  ]
})
export class PagesModule { }
