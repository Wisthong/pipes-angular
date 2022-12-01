import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-right',
            routerLink: '/',
          },
          {
            label: 'Numeros',
            icon: 'pi pi-sort-numeric-down',
            routerLink: 'numeros',
          },
          // {
          //   label: 'Ordenar',
          //   icon: 'pi pi-sort-alt',
          //   routerLink: 'ordenar',
          // },
          {
            label: 'No comunes',
            icon: 'pi pi-cog',
            routerLink: 'no-comunes',
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        routerLink: 'ordenar',
      },
    ];
  }
}
