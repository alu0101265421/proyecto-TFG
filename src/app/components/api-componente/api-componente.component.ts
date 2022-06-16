import { Component, OnInit } from '@angular/core';
import {
  ApiService,
  IAnalisisResult,
  ICategoria,
  IDocResult,
  IGuideline,
} from 'src/app/services/api.service';

import result from '../../services/result.json';

export interface IGrafica {
  name: string;
  value: number;
}

@Component({
  selector: 'app-api-componente',
  templateUrl: './api-componente.component.html',
  styleUrls: ['./api-componente.component.css'],
})
export class ApiComponenteComponent implements OnInit {
  public direccion: string = '';
  public resultadosAnalisisWeb!: IAnalisisResult | null;
  public resultadosTraducidos: ICategoria[] = [];

  public showSpinner = false;
  public panelOpenState = false;

  grafica!: IGrafica[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  async analizarWeb() {
    this.showSpinner = true;

    this.resultadosAnalisisWeb = await this.apiService.analizarWeb(
      this.direccion
    );

    this.showSpinner = false;

    if (!this.resultadosAnalisisWeb?.categories) return;

    /* console.log(this.resultadosAnalisisWeb); */

    const categories = Object.values(this.resultadosAnalisisWeb.categories);

    this.resultadosTraducidos = categories.map((category) => {
      const tipo = category.description;

      const items = Object.values(category.items);

      const pautas = items.map((item) => {
        const id = item.id;
        const criterios = this.apiService.obtenerPautasDeID(id);
        return { id: id, criterios: criterios, titulo: item.description };
      });

      return { tipo, pautas };
    });

    this.grafica = this.resultadosTraducidos.map((rt) => {
      const valorGrafica: IGrafica = {
        name: rt.tipo,
        value: rt.pautas.length,
      };
      return valorGrafica;
    });

    /*     console.log('===>', this.resultadosTraducidos); */
  }
}
