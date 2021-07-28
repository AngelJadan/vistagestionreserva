import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url:string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/gestionreservas/rest/cliente';
   }
  public getCliente(cedula:string){
    console.log(cedula);
    return this.http.get(this.url+"/search?cedula="+cedula);
  }
  public postCliente(body:URLSearchParams){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    }
    return this.http.post(this.url+"/save_coustumer",body,httpOptions);
  }
}
