import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component'
import { NuevorestauranteComponent } from './components/nuevorestaurante/nuevorestaurante.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { ReservasinicioComponent } from './components/reservasinicio/reservasinicio.component';
import { ListClienteReservaComponent } from './components/list-cliente-reserva/list-cliente-reserva.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'crearcliente', component: ClienteComponent},
  {path: 'nuevorest',component:NuevorestauranteComponent},
  {path: 'reservar',component:ReservarComponent},
  {path: 'reservarest/:nombre', component:ReservasinicioComponent},
  {path: 'reservclient',component:ListClienteReservaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
