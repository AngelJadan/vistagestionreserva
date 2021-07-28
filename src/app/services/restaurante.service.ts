import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  url: string;
  constructor(private http: HttpClient) { 
    this.url="http://localhost:8080/gestionreservas/rest/restaurante";
  }

  public postRestaurante(body:URLSearchParams){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    }
    return this.http.post(this.url+"/save_restaurante",body,httpOptions);
  }
  public getRestaurante(nombre:string){
    return this.http.get (this.url+""+nombre);
  }
  public getRestaurantes(){
    return this.http.get(this.url+"/list_restaurante");
  }
}
