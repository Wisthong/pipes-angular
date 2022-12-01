import { Component } from '@angular/core';
import { Color, Heroe } from '@modules/ventas/interface/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css'],
})
export class OrdenarComponent {
  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Capitan america',
      vuela: true,
      color: Color.rojo,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'ROBIN',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde,
    },
  ];
  flags: boolean = false;
  constructor() {}

  onCambiar() {
    this.flags = !this.flags;
  }

  onChangeOrder(valor: string) {
    this.ordenarPor = valor;
  }
}
