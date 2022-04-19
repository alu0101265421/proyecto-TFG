import { Component, OnInit } from '@angular/core';
import { ServicesComponent, DocResult, Guideline } from "src/app/services/services.component";

@Component({
  selector: 'app-api-componente',
  templateUrl: './api-componente.component.html',
  styleUrls: ['./api-componente.component.css']
})
export class ApiComponenteComponent implements OnInit {

  public direccion: string;

  private result!: DocResult | null;
  public titulo2!: string ;
  public guias!: Guideline[];

  constructor(private apiService: ServicesComponent) { 
    this.direccion = '';

    console.log("Mi componente esta cargado");
  }

  ngOnInit(): void {
  }

  async introducirUrl() {
    const result = await this.apiService.consultarApi(this.direccion);
    console.log(result);
}

async buscarID() {
    this.result = await this.apiService.consultarID();
    console.log(this.result);
    this.titulo2 = this.result?.title || '';
    this.guias = this.result?.guidelines || [];
}

}
