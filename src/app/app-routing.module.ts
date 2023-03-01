import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './components/bikes/bikes.component';
import { CarsComponent } from './components/cars/cars.component';
import { IniciarsesionComponent } from './components/iniciarsesion/iniciarsesion.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PersonasComponent } from './components/personas/personas.component';
import { RegistrarComponent } from './components/registrar/registrar.component';

import {EditarbikerComponent} from './components/editarbiker/editarbiker.component';
import {EditarcarComponent} from './components/editarcar/editarcar.component';

import { MenuComponent } from './components/menu/menu.component';
import { LoginGuard } from './guards/login/login.guard';
import { AuthGuard } from './guards/Usuario/usuario-activo.guard';

//rutas de navegacion
const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:'full'},
  {path:'inicio', component:IniciarsesionComponent, canActivate:[LoginGuard]},
  {path:'registrar', component:RegistrarComponent, canActivate:[LoginGuard]},
  {path:'personas', component: PersonasComponent, canActivate:[AuthGuard]},
  {path:'bikes',component:BikesComponent, canActivate:[AuthGuard]},
  {path:'cars', component: CarsComponent, canActivate:[AuthGuard]},
  {path:'menu', component: MenuComponent, canActivate:[AuthGuard]},
  {path:'editarbiker', component: EditarbikerComponent, canActivate:[AuthGuard]},
  {path:'editarcar', component: EditarcarComponent, canActivate:[AuthGuard]},
  {path:'notfound', component: NotfoundComponent},
  {path:'**', redirectTo:'notfound', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
