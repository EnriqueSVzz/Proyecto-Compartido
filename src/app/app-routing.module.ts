import { AcercaNosComponent } from './acerca-nos/acerca-nos.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // todas las rutas va a cargar home?
  {path: '', component: HomeComponent},
  {path:'acerca', component: AcercaNosComponent},
  {path:'**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
