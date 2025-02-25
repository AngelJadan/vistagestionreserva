import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClienteComponent } from './components/cliente/cliente.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { BuscarclienteComponent } from './components/buscarcliente/buscarcliente.component';
import { NuevorestauranteComponent } from './components/nuevorestaurante/nuevorestaurante.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReservasinicioComponent } from './components/reservasinicio/reservasinicio.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { ListClienteReservaComponent } from './components/list-cliente-reserva/list-cliente-reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    RestaurantesComponent,
    BuscarclienteComponent,
    NuevorestauranteComponent,
    InicioComponent,
    ReservasinicioComponent,
    ReservarComponent,
    ListClienteReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
