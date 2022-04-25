import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  irValidador() {
    this.router.navigateByUrl('validador');
  }

  irEstadisticas() {
    this.router.navigateByUrl('estadisticas');
  }
  irAccesibilidad() {
    this.router.navigateByUrl('accesibilidad');
  }
  irUsabilidad() {
    this.router.navigateByUrl('usabilidad');
  }
  irUX() {
    this.router.navigateByUrl('ux');
  }
  irQuienSoy() {
    this.router.navigateByUrl('quiensoy');
  }
}
