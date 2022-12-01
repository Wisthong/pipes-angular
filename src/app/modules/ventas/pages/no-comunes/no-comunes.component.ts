import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent implements OnInit {
  nombre: string = 'Jessica';
  genero: string = 'femenino';
  // genero: string = 'masculino';

  inviteMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural

  clientes: string[] = ['Daniel', 'Santiago', 'David', 'Gloria'];
  clienteMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos 1 cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  //Objeto persona

  persona = {
    nombre: 'Wisthong David Martinez Castro',
    edad: 25,
    nacionalidad: 'Colombia',
  };

  constructor() {}

  ngOnInit(): void {}

  onChangeSexo() {
    this.nombre == 'Jessica'
      ? ((this.nombre = 'Wisthong'), (this.genero = 'masculino'))
      : ((this.nombre = 'Jessica'), (this.genero = 'femenino'));
  }

  onDeleteClient() {
    this.clientes.splice(0, 1);
    console.log(this.clientes);
  }

  miObservable = interval(1000);
}
