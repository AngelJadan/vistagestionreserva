import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-reservasinicio',
  templateUrl: './reservasinicio.component.html',
  styleUrls: ['./reservasinicio.component.css']
})
export class ReservasinicioComponent implements OnInit {

  restaurante:string;
  fecha:string="";
  formRest:FormGroup;
  reservas = new Array;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, 
    private ReservaService:ReservaService) { 
    this.restaurante = route.snapshot.params.nombre;
    this.formRest = formBuilder.group({});
  }

  ngOnInit(): void {
    this.formRest = this.formBuilder.group({
      fecha:['', [Validators.required]]
    })
  }
  listReservas(){
    this.reservas = new Array;
    this.ReservaService.getReservaRestaurante(this.restaurante,this.formRest.controls["fecha"].value)
    .subscribe((res: any)=>{
      console.log(res);
      if(res.length>0){
        for(let i=0; i<res.length; i++){
          var reservs = {
            cedula: res[i].cliente.cedula,
            cliente: res[i].cliente.nombre+" "+res[i].cliente.apellido,
            hora: res[i].hora.hour+":"+res[i].hora.minute,
            asistentes: res[i].assitentes
          }
          this.reservas.push(reservs);
        }
      }
    });
  }

}
