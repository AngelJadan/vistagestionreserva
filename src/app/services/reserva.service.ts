import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  url: string;
  constructor(private http:HttpClient) {
    this.url = "";
  }
  public postReserva(body:string){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    }
    return this.http.post(this.url+"", body,httpOptions);
  }
  public getReservaCliente(cedula:string){
    return this.http.get(this.url+"");
  }
  public getReservaRestaurante(nombre:string,fecha:string){
    return this.http.get(this.url+"");
  }
}
