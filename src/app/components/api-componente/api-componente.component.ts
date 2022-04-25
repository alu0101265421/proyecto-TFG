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
    /*     console.log({ categories });
    categories.map((category) => {
      const items = Object.values(category.items);
    }); */

    const a = this.apiService.obtenerPautasDeID('alt_link_missing');
    console.log(a);
  }

  async buscarID() {
    this.result = await this.apiService.consultarDoc();
    console.log(this.result);
    this.titulo2 = this.result?.title || '';
    this.guias = this.result?.guidelines || [];
  }
}
