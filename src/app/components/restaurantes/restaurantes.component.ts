import { Component, OnInit } from '@angular/core';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  restaurantes = new Array;
  constructor(private RestauranteService:RestauranteService) {
    this.listRestaurantes();
  }

  ngOnInit(): void {
  }

  listRestaurantes(){

    this.RestauranteService.getRestaurantes()
    .subscribe((res: any) =>{
      console.log('res',res);
      for (let i = 0; i <res.length; i++) {
        var rests = {
          nombre: res[i].nombre,
          direccion: res[i].direccion,
          telefono: res[i].telefono,
          aforo: res[i].aforo
        }
        this.restaurantes.push(rests);
      }
    });
  }

}
