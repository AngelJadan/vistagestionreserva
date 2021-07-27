import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
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
        Validators.pattern(/[0-9]/),
        Validators.minLength(7),
        Validators.maxLength(10)
      ]],
      aforo: ['',[
        Validators.required,
        Validators.pattern(/[0-9]/),
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
  }
}
