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
  }
  canarias() {
    this.router.navigateByUrl('canarias');
  }
  cataluna() {
    this.router.navigateByUrl('cataluna');
  }
  asturias() {
    this.router.navigateByUrl('asturias');
  }
  congreso() {
    this.router.navigateByUrl('congreso');
  }
  extremadura() {
    this.router.navigateByUrl('extremadura');
  }
  galicia() {
    this.router.navigateByUrl('galicia');
  }
  madrid() {
    this.router.navigateByUrl('madrid');
  }
  senado() {
    this.router.navigateByUrl('senado');
  }
  valencia() {
    this.router.navigateByUrl('valencia');
  }
}
