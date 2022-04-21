import { Component, OnInit } from '@angular/core';
import { ApiService, ICategoria } from 'src/app/services/api.service';
import {
  DocResult,
  Guideline,
  ApiResult,
} from 'src/app/services/services.component';
import result from '../../services/result.json';

@Component({
  selector: 'app-api-componente',
  templateUrl: './api-componente.component.html',
  styleUrls: ['./api-componente.component.css'],
})
export class ApiComponenteComponent implements OnInit {
  public direccion: string = '';

  private result!: DocResult | null;
  public titulo2!: string;
  public guias!: Guideline[];
  public panelOpenState = false;
  public resultadosAnalisisWeb!: ApiResult | null;
  public alerts!: any[];
  public errors!: any[];
  public analisis: ICategoria[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.analizarWeb();
  }

  async analizarWeb() {
    this.resultadosAnalisisWeb = await this.apiService.analizarWeb(
      this.direccion
    );
    if (!this.resultadosAnalisisWeb?.categories) return;

    const categories = Object.values(this.resultadosAnalisisWeb.categories);
    console.log({ categories });
    categories.map((category) => {
      const items = Object.values(category.items);
    });
    // const errorItems = Object.values(this.resultadosAnalisisWeb.categories.error.items);
    // const errorIds = errorItems.map(error => error.id);

    // const alertItems = Object.values(this.resultadosAnalisisWeb.categories.alert.items);
    // const alertIds = errorItems.map(error => error.id);

    // const errores: ICategoria = {
    //   tipo: 'ERRORES',
    //   pautas: [])
    // }
    // const alertas: ICategoria = {
    //   tipo: 'ALERTAS',
    //   pautas: []
    // }

    this.errors = Object.values(
      this.resultadosAnalisisWeb?.categories.error.items
    );
    this.alerts = Object.values(
      this.resultadosAnalisisWeb?.categories.alert.items
    );

    console.log(this.alerts);
    console.log(this.errors);
  }

  async buscarID() {
    this.result = await this.apiService.consultarDoc();
    console.log(this.result);
    this.titulo2 = this.result?.title || '';
    this.guias = this.result?.guidelines || [];
  }
}
