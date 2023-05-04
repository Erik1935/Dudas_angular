import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AgendarEventosComponent } from './agendar-eventos/agendar-eventos.component';
import { VisorEventosComponent } from './visor-eventos/visor-eventos.component';
import { OpcionesDeInicioComponent } from './opciones-de-inicio/opciones-de-inicio.component';

const routes:Routes=[
  {
    path:'login',
    component:LoginComponent
  },
 {
  path:'agendar',
  component:AgendarEventosComponent
 },
 {
  path:'visor',
  component:VisorEventosComponent
 },
 {
  path:'inicio',
  component:OpcionesDeInicioComponent
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
export class AuthRoutingModule { }
