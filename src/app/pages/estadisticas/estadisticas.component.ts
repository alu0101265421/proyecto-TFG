import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
})
export class EstadisticasComponent {
  constructor(private router: Router) {}

  andalucia() {
    this.router.navigateByUrl('andalucia');

    console.log('Muestro las graficas de Andalucia');
  }
  canarias() {
    this.router.navigateByUrl('canarias');

    console.log('Muestro las graficas de Canarias');
  }
  cataluna() {
    this.router.navigateByUrl('cataluna');

    console.log('Muestro las graficas de Cataluña');
  }
  asturias() {
    this.router.navigateByUrl('asturias');

    console.log('Muestro las graficas de asturias');
  }
  congreso() {
    this.router.navigateByUrl('congreso');

    console.log('Muestro las graficas de congreso');
  }
  extremadura() {
    this.router.navigateByUrl('extremadura');

    console.log('Muestro las graficas de extremadura');
  }
  galicia() {
    this.router.navigateByUrl('galicia');

    console.log('Muestro las graficas de galicia');
  }
  madrid() {
    this.router.navigateByUrl('madrid');

    console.log('Muestro las graficas de madrid');
  }
  senado() {
    this.router.navigateByUrl('sendado');

    console.log('Muestro las graficas de sendado');
  }
  valencia() {
    this.router.navigateByUrl('valencia');

    console.log('Muestro las graficas de valencia');
  }
}
