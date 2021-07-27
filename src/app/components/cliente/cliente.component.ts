import { Component, Injectable, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
@Injectable()
export class ClienteComponent implements OnInit {

  smscedula:string="";
  smsnombre:string="";
  smsapellido:string="";
  smsdireccion:string="";
  smstelefono:string="";
  smscorreo:string="";

  public formCliente: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formCliente = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.formCliente = this.formBuilder.group({
      cedula: ['',
        [Validators.required,
        Validators.pattern(/[0-9]/),
        this.validCedula]
      ],
      nombre: ['',
        [Validators.required],
      ],
      apellido: ['',
        [
          Validators.required
        ]],
      direccion: ['',
        [
          Validators.required
        ]
      ],
      telefono: ['',
        [
          Validators.required,
          Validators.pattern(/[0-9]/),
          Validators.minLength(7),
          Validators.maxLength(10)
        ]
      ],
      correo: ['',
      [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      ]
    ]
    });
  }
  validadorDeCedula(cedula: String) {
    let cedulaCorrecta = false;
    if (cedula.length == 10)
    {    
        let tercerDigito = parseInt(cedula.substring(2, 3));
        if (tercerDigito < 6) {
            // El ultimo digito se lo considera dígito verificador
            let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];       
            let verificador = parseInt(cedula.substring(9, 10));
            let suma:number = 0;
            let digito:number = 0;
            for (let i = 0; i < (cedula.length - 1); i++) {
                digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];      
                suma += ((parseInt((digito % 10)+'') + (parseInt((digito / 10)+''))));
            }
            suma= Math.round(suma);
            if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10)== verificador)) {
                cedulaCorrecta = true;
            } else if ((10 - (Math.round(suma % 10))) == verificador) {
                cedulaCorrecta = true;
            } else {
                cedulaCorrecta = false;
            }
        } else {
            cedulaCorrecta = false;
        }
    } else {
        cedulaCorrecta = false;
    }
    return cedulaCorrecta;
  }
  
  validCedula(value:string): { [key: string]:boolean } |null {
    
    try {
      if(this.formCliente.get('cedula')?.valid==false || this.validadorDeCedula(value)==false){
        this.smscedula="Número de cedula incorrecto.";
        return null;
      }else{
        this.smscedula="";
        return {'cedulaval':true};
      }      
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  validNombre(value: string){
    try{
      if(this.formCliente.get('nombre')?.valid==false){
        this.smsnombre="Campo obligatorio.";
      }else{
        this.smsnombre="";
      }
    }catch(e){}
  }
  validApellido(value: string){
    try{
      if(this.formCliente.get('apellido')?.valid==false){
        this.smsapellido="Campo obligatorio.";
      }else{
        this.smsapellido="";
      }
    }catch(e){}
  }
  validDireccion(value: string){
    try{
      if(this.formCliente.get('direccion')?.valid==false){
        this.smsdireccion="Campo obligatorio.";
      }else{
        this.smsdireccion="";
      }
    }catch(e){}
  }
  validTelefono(value: string){
    try{
      if(this.formCliente.get('telefono')?.valid==false){
        this.smstelefono="Número de teléfono no valido.";
      }else{
        this.smstelefono="";
      }
    }catch(e){}
  }
  validCorreo(value: string){
    try {
      if(this.formCliente.get("correo")?.valid==false){
        this.smscorreo="Correo invalido";
      }else{
        this.smscorreo="";
      }
    } catch (error) {
      
    }
  }
  save():any {
    console.log("Entro: ",this.formCliente.value);
    console.log("Estado: ",this.formCliente.status);
    if(this.formCliente.status=="VALID"){
      console.log("Validado todo.");
    }

  }
  get corr(){
    return this.formCliente.get("correo")?.valid;
  }

}
