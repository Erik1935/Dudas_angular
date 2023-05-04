import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { OpcionesDeInicioComponent } from './opciones-de-inicio/opciones-de-inicio.component';
import { AgendarEventosComponent } from './agendar-eventos/agendar-eventos.component';
import { RouterModule } from '@angular/router';
import { VisorEventosComponent } from './visor-eventos/visor-eventos.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    LoginComponent,
    OpcionesDeInicioComponent,
    AgendarEventosComponent,
    VisorEventosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule
  ],
  exports:[
    RouterModule
  ]
})
export class AuthModule { }
