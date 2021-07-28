import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-nuevorestaurante',
  templateUrl: './nuevorestaurante.component.html',
  styleUrls: ['./nuevorestaurante.component.css']
})
export class NuevorestauranteComponent implements OnInit {

  smsnombre: string = "";
  smsdireccion: string = "";
  smstelefono: string = "";
  smsaforo: string = "";

  public formRestaurante: FormGroup;

  constructor(private formBuilder: FormBuilder, private RestauranteService:RestauranteService) {
    this.formRestaurante = formBuilder.group({});
  }
  ngOnInit(): void {
    this.formRestaurante = this.formBuilder.group({
      nombre: ['',
        [Validators.required]
      ],
      direccion: ['',[
        Validators.required
      ]],
      telefono:['',[
        Validators.required,
        Validators.pattern(/^[0-9]+/),
        Validators.minLength(7),
        Validators.maxLength(10)
      ]],
      aforo: ['',[
        Validators.required,
        Validators.pattern(/^[0-9]+/),
        Validators.minLength(1),
        Validators.maxLength(6)
      ]]
    })
  }
  validNombre(value:string){
    try {
      if(this.formRestaurante.get('nombre')?.valid==false){
        this.smsnombre = "Campo obligatorio.";
      }else{
        this.smsnombre = "";
      }
    } catch (error) {
      
    }
  }
  validDireccion(valid:string){
    try {
      if(this.formRestaurante.get('direccion')?.valid==false){
        this.smsdireccion = "Campo obligatorio.";
      }else{
        this.smsdireccion = "";
      }
    } catch (error) {
    }
  }
  validTelefono(valid:string){
    try {
      if(this.formRestaurante.get('telefono')?.valid==false){
        this.smstelefono = "Número de teléfono invalido.";
      }else{
        this.smstelefono = "";
      }
    } catch (error) {
    }
  }
  validAforo(valid:string){
    try {
      if(this.formRestaurante.get('aforo')?.valid==false){
        this.smsaforo = "Formato no valido";
      }else{
        this.smsaforo = "";
      }
    } catch (error) {
    }
  }
  saveRestaurante(){
    let body = new URLSearchParams();
    if(this.formRestaurante.status=="VALID"){
      body.set("nombre",this.formRestaurante.value.nombre);
      body.set("direccion",this.formRestaurante.value.direccion);
      body.set("telefono",this.formRestaurante.value.telefono);
      body.set("aforo",this.formRestaurante.value.aforo);

      this.RestauranteService.postRestaurante(body)
      .subscribe((response: any)=>{
        console.log(response);
        if(response.code === 200) {
          this.formRestaurante.value.nombre = "";
          this.formRestaurante.value.direccion = "";
          this.formRestaurante.value.telefono = "";
          this.formRestaurante.value.aforo = "";
          
          alert(response.messaje);
        }else{
          alert("Error: "+response.messaje);
        }
      })
    }
  }
}
