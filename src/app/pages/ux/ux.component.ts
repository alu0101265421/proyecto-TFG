import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IEstructuraUX,
  IOrigenResult,
  IUxResult,
  UxApiService,
} from 'src/app/services/ux-api.service';

@Component({
  selector: 'app-ux',
  templateUrl: './ux.component.html',
  styleUrls: ['./ux.component.css'],
})
export class UxComponent implements OnInit {
  constructor(private router: Router) {}

  async ngOnInit(): Promise<void> {}

  andalucia() {
    this.router.navigateByUrl('uxandalucia');

    console.log('Muestro las graficas de Andalucia');
  }
  canarias() {
    this.router.navigateByUrl('uxcanarias');

    console.log('Muestro las graficas de Canarias');
  }
  cataluna() {
    this.router.navigateByUrl('uxcataluna');

    console.log('Muestro las graficas de Cataluña');
  }
  asturias() {
    this.router.navigateByUrl('uxasturias');

    console.log('Muestro las graficas de asturias');
  }
  congreso() {
    this.router.navigateByUrl('uxcongreso');

    console.log('Muestro las graficas de congreso');
  }
  extremadura() {
    this.router.navigateByUrl('uxextremadura');

    console.log('Muestro las graficas de extremadura');
  }
  galicia() {
    this.router.navigateByUrl('uxgalicia');

    console.log('Muestro las graficas de galicia');
  }
  madrid() {
    this.router.navigateByUrl('uxmadrid');

    console.log('Muestro las graficas de madrid');
  }
  senado() {
    this.router.navigateByUrl('uxsenado');

    console.log('Muestro las graficas de sendado');
  }
  valencia() {
    this.router.navigateByUrl('uxvalencia');

    console.log('Muestro las graficas de valencia');
  }
}
