import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit {

  ced: string = "";
  nombre: string = "";
  apellido: string = "";
  cliente: string = "";
  smsok: string = "";
  smserror: string = "";

  fecha = "";
  hora = "";

  restaurantes = new Array;

  public formCli: FormGroup;
  public formReserva: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private ClienteService: ClienteService, private RestauranteService: RestauranteService,
    private ReservaService: ReservaService) {
    this.formCli = this.formBuilder.group({});
    this.formReserva = this.formBuilder.group({});
    this.listRestaurante();
  }

  ngOnInit(): void {
    this.formCli = this.formBuilder.group({
      cedula: ['', [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)]
      ],
    });

    this.formReserva = this.formBuilder.group({
      restaurante: ['', [Validators.required]
      ],
      cedula: ['', []],
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      asistentes: ['', [Validators.required, Validators.pattern(/^[0-9]+/)]]

    });
  }

  listRestaurante() {
    this.RestauranteService.getRestaurantes()
      .subscribe((response: any) => {
        console.log("Respuesta: ", response[0].id);
        console.log("For: ", response.length);
        for (let i = 0; i < response.length; i++) {
          var rests = {
            id: response[i].id,
            rest: response[i].nombre
          };
          this.restaurantes.push(rests);
        }
      })
  }

  buscarcliente() {
    console.log(this.ced);
    this.ced = this.formCli.value.cedula;
    this.ClienteService.getCliente(this.ced)
      .subscribe((response: any) => {
        console.log(response);
        if (response != null) {
          console.log("cedula", response.cedula);
          this.formReserva.value.cedula = response.cedula;
          this.nombre = response.nombre;
          this.apellido = response.apellido;
        } else {
          alert("No se encuentra el cliente, primero debe registrar los datos.");
        }

      })
  }
  saveReserva() {
    console.log(this.formReserva.value);
    let body = new URLSearchParams();

    this.cliente = this.formCli.value.cedula
    console.log("cedula form cliente", this.cliente);

    this.formReserva.value.cedula = this.formCli.controls["cedula"].value;
    console.log("cedula buscada ", this.formCli.controls["cedula"].value);
    console.log("validacion. ", this.formReserva.status);
    console.log("cedula. ", this.formReserva.controls["cedula"].value);
    console.log("cedula valid", this.formReserva.get("cedula")?.status);
    console.log("rest valid", this.formReserva.get("restaurante")?.status);
    console.log("fecha valid", this.formReserva.get("fecha")?.status);
    console.log("hora valid", this.formReserva.get("hora")?.status);
    console.log("asis valid", this.formReserva.get("asistentes")?.status);
    if (this.formReserva.status == "VALID") {
      console.log("Validado todo");
      body.set("fecha", this.formReserva.controls["fecha"].value);
      body.set("cedula", this.formCli.controls["cedula"].value);
      body.set("restaurante", this.formReserva.controls["restaurante"].value);
      body.set("hora", this.formReserva.controls["hora"].value);
      body.set("asistentes", this.formReserva.controls["asistentes"].value);
      console.log(body);
      this.ReservaService.postReserva(body)
        .subscribe((res: any) => {
          console.log(res);
          if (res.code == 200) {
            this.smsok = res.messaje;
            this.smserror = "";
          } else {
            this.smsok = "";
            this.smserror = res.messaje;
          }
        });
    }
  }
}
