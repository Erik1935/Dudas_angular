import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [
  {
    path:'',redirectTo:'inicio',pathMatch:'full'
  },
  {path:'**',component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  PagesRoutingModule,
  AuthRoutingModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
