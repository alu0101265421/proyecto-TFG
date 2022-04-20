import { Component, OnInit } from '@angular/core';
import {
  ServicesComponent,
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
  public direccion: string;

  private result!: DocResult | null;
  public titulo2!: string;
  public guias!: Guideline[];
  public panelOpenState = false;
  public resultadosAnalisisWeb!: ApiResult | null;
  public alerts!: any[];
  public errors!: any[];

  constructor(private apiService: ServicesComponent) {
    this.direccion = '';

    console.log('Mi componente esta cargado');
  }

  ngOnInit(): void {
    this.introducirUrl();
  }

  async introducirUrl() {
    this.resultadosAnalisisWeb = await this.apiService.consultarApi(
      this.direccion
    );

    if (!this.resultadosAnalisisWeb?.categories) return;
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
    this.result = await this.apiService.consultarID();
    console.log(this.result);
    this.titulo2 = this.result?.title || '';
    this.guias = this.result?.guidelines || [];
  }
}
