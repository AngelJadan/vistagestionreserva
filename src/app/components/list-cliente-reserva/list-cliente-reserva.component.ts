import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-list-cliente-reserva',
  templateUrl: './list-cliente-reserva.component.html',
  styleUrls: ['./list-cliente-reserva.component.css']
})
export class ListClienteReservaComponent implements OnInit {

  formRest:FormGroup;
  reservas =  new Array;

  constructor(private formBuilder: FormBuilder, private ReservaService: ReservaService) {
    this.formRest = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.formRest = this.formBuilder.group({
      cedula: ['',[
        Validators.required
      ]]
    });
  }
  listReservas(){
    this.reservas = new Array;
    this.ReservaService.getReservaCliente(this.formRest.controls["cedula"].value)
    .subscribe((res:any)=>{
      console.log("resp ", res);
      if(res.length>0){
        for(var i=0; i<res.length; i++){
          var obj ={
            restaurante: res[i].restaurante.nombre,
            fecha: res[i].fecha.year+"- "+res[i].fecha.monthValue+"-"+res[i].fecha.dayOfMonth,
            hora: res[i].hora.hour+":"+res[i].hora.minute
          }
          this.reservas.push(obj);
        }
      }
    });
    console.log("enter");
  }

}
