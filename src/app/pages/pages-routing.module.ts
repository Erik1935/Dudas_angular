import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes:Routes=[
  {
    path:'home',
    component:PagesComponent,
  children:[
    {
      path:'',
      component:DashboardComponent
    },
    {
      path:'calendario',
      component:CalendarComponent
    },
    {
      path:'servicios',
      component:ServiciosComponent
    }
  ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
