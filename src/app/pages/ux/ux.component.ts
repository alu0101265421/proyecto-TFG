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
  }
  canarias() {
    this.router.navigateByUrl('uxcanarias');
  }
  cataluna() {
    this.router.navigateByUrl('uxcataluna');
  }
  asturias() {
    this.router.navigateByUrl('uxasturias');
  }
  congreso() {
    this.router.navigateByUrl('uxcongreso');
  }
  extremadura() {
    this.router.navigateByUrl('uxextremadura');
  }
  galicia() {
    this.router.navigateByUrl('uxgalicia');
  }
  madrid() {
    this.router.navigateByUrl('uxmadrid');
  }
  senado() {
    this.router.navigateByUrl('uxsenado');
  }
  valencia() {
    this.router.navigateByUrl('uxvalencia');
  }
}
