import { Component, OnInit } from '@angular/core';
import {
  ApiService,
  IAnalisisResult,
  ICategoria,
  IDocResult,
  IGuideline,
} from 'src/app/services/api.service';

import result from '../../services/result.json';
import { from } from 'rxjs';

@Component({
  selector: 'app-api-componente',
  templateUrl: './api-componente.component.html',
  styleUrls: ['./api-componente.component.css'],
})
export class ApiComponenteComponent implements OnInit {
  public direccion: string = '';

  private result!: IDocResult | null;
  public titulo2!: string;
  public guias!: IGuideline[];
  public panelOpenState = false;
  public resultadosAnalisisWeb!: IAnalisisResult | null;
  public alerts!: any[];
  public errors!: any[];
  public analisis: ICategoria[] = [];
  public resultadosTraducidos: ICategoria[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  async analizarWeb() {
    this.resultadosAnalisisWeb = await this.apiService.analizarWeb(
      this.direccion
    );
    if (!this.resultadosAnalisisWeb?.categories) return;

    console.log(this.resultadosAnalisisWeb);

    const categories = Object.values(this.resultadosAnalisisWeb.categories);
    console.log({ categories });
    console.log(categories);

    /*     console.log({ categories });
    categories.map((category) => {
      const items = Object.values(category.items);
    }); */

    // category.items:
    // {
    //   alt_noseque: {
    //      id: 'alt_noseque',
    //      description: 'sfgsf',
    //      count: 3
    //   },
    //   alt_noseque_2: {
    //      id: 'alt_noseque_2',
    //      description: 'sfgsf',
    //      count: 3
    //   }
    // },

    /* 
          Object.value:

          [
            {
              id: 'alt_noseque',
              description: 'sfgsf',
              count: 3
            },
            {
              id: 'alt_noseque_2',
              description: 'sfgsf',
              count: 3
            }
          ]
    */

    this.resultadosTraducidos = categories.map((category) => {
      const tipo = category.description;

      const items = Object.values(category.items);

      const pautas = items.map((item) => {
        const id = item.id;
        const criterios = this.apiService.obtenerPautasDeID(id);
        return { id, criterios, titulo: item.description };
      });

      return { tipo, pautas };
    });

    console.log('===>', this.resultadosTraducidos);
  }
}
