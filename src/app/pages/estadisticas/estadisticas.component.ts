import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
})
export class EstadisticasComponent implements OnInit {
  public seleccionado: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  menu(num: number) {
    switch (num) {
      case 1:
        return this.andalucia();
      case 2:
        return this.canarias();
    }
    //switch en el que cada caso te lleva a una funcion de un caso de uso diferente
    //case 1: return canarias()
    //case 2: return andalucia()
  }

  andalucia() {
    this.seleccionado = !this.seleccionado;
    console.log('Muestro las graficas de Andalucia');
  }
  canarias() {
    this.seleccionado = !this.seleccionado;
    console.log('Muestro las graficas de Canarias');
  }
  /* canarias(){
    - grafica de barras total
    - grafica de porcentaje nivel  A
    - grafica de porcentaje nivel AA
  
  } */
}
