import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  url: string;
  constructor(private http:HttpClient) {
    this.url = "http://localhost:8080/gestionreservas/rest/reserva";
  }
  public postReserva(body:URLSearchParams){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    }
    return this.http.post(this.url+"/save_reserva", body,httpOptions);
  }
  public getReservaCliente(cedula:string){
    return this.http.get(this.url+"/list_reserva_cliente/?cedula="+cedula);
  }
  public getReservaRestaurante(nombre:string,fecha:string){
    return this.http.get(this.url+"/list_reserva_restaurante/?nombre="+nombre+"&fecha="+fecha);
  }
}
