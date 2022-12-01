import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css'],
})
export class NumerosComponent implements OnInit {
  ventasNetas: number = 157985478.4475;
  porcentaje: number = 0.47;
  constructor() {}

  ngOnInit(): void {}
}
