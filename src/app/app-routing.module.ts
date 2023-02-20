import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './components/bikes/bikes.component';
import { CarsComponent } from './components/cars/cars.component';
import { IniciarsesionComponent } from './components/iniciarsesion/iniciarsesion.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PersonasComponent } from './components/personas/personas.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import {EditarpersonaComponent} from './components/editarpersona/editarpersona.component';
import {EditarbikerComponent} from './components/editarbiker/editarbiker.component';
import {EditarcarComponent} from './components/editarcar/editarcar.component';
import { EliminarpersonaComponent } from './components/eliminarpersona/eliminarpersona.component';
import { EliminarbikerComponent } from './components/eliminarbiker/eliminarbiker.component';
import { EliminarcarComponent } from './components/eliminarcar/eliminarcar.component';
import { MenuComponent } from './components/menu/menu.component';

//rutas de navegacion
const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:'full'},
  {path:'inicio', component:IniciarsesionComponent},
  {path:'registrar', component:RegistrarComponent},
  {path:'personas', component: PersonasComponent},
  {path:'bikes',component:BikesComponent},
  {path:'cars', component: CarsComponent},
  {path:'editarpersona', component: EditarpersonaComponent},
  {path:'editarbikes', component: EditarbikerComponent},
  {path:'editarcars', component: EditarcarComponent},
  {path:'eliminarpersona', component: EliminarpersonaComponent},
  {path:'eliminarbikes', component: EliminarbikerComponent},
  {path:'eliminarcars', component: EliminarcarComponent},
  {path:'menu', component: MenuComponent},
  {path:'notfound', component: NotfoundComponent},
  {path:'**', redirectTo:'notfound', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
