import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  irHome() {
    this.router.navigateByUrl('home');
  }

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
