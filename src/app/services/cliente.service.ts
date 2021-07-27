import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url:string;
  constructor(private http: HttpClient) {
    this.url = 'https://';
   }
  public getCliente(cedula:string){
    return this.http.get(this.url+"");
  }
  public postCliente(body:string){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    }
    return this.http.post(this.url+"//",body,httpOptions);
  }
}
