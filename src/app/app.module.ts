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

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    RestaurantesComponent,
    BuscarclienteComponent,
    NuevorestauranteComponent,
    InicioComponent
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
