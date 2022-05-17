import { Component, OnInit } from '@angular/core';
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
  public resultadosUX!: IUxResult | null;
  public LCP!: IEstructuraUX;
  public FID!: IEstructuraUX;
  public CLS!: IEstructuraUX;

  LCPColor!: string;
  FIDColor!: string;
  CLSColor!: string;

  origenResult!: IOrigenResult;
  constructor(private uxService: UxApiService) {}

  async ngOnInit(): Promise<void> {
    this.resultadosUX = await this.uxService.analizarUX(
      'https://www.parcan.es/'
    );

    if (!this.resultadosUX?.originLoadingExperience) return;

    console.log(this.resultadosUX);

    this.origenResult = this.resultadosUX.originLoadingExperience;

    console.log(this.origenResult);

    this.LCP = this.origenResult.metrics.LARGEST_CONTENTFUL_PAINT_MS;
    this.FID = this.origenResult.metrics.FIRST_INPUT_DELAY_MS;
    this.CLS = this.origenResult.metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE;

    this.FID.category;
    const aux = this.uxService.traducirCategoriaEsp(this.LCP.category);

    this.asignarColores();
    console.log('traducion', aux);

    console.log(this.LCP);
    console.log(this.FID);
    console.log(this.CLS);
  }

  asignarColores() {
    const metrics = this.origenResult.metrics;
    const LCPCategory = metrics.LARGEST_CONTENTFUL_PAINT_MS.category;
    const FIDCategory = metrics.FIRST_INPUT_DELAY_MS.category;
    const CLSCategory = metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE.category;

    switch (LCPCategory) {
      case 'FAST':
        this.LCPColor = 'green';
        metrics.LARGEST_CONTENTFUL_PAINT_MS.category = 'RAPIDO';
        break;

      case 'AVERAGE':
        this.LCPColor = 'orange';
        metrics.LARGEST_CONTENTFUL_PAINT_MS.category = 'MEDIO';
        break;

      case 'SLOW':
        this.LCPColor = 'red';
        metrics.LARGEST_CONTENTFUL_PAINT_MS.category = 'LENTO';
        break;
    }

    switch (FIDCategory) {
      case 'FAST':
        this.FIDColor = 'green';
        metrics.FIRST_INPUT_DELAY_MS.category = 'RAPIDO';
        break;

      case 'AVERAGE':
        this.FIDColor = 'orange';
        metrics.FIRST_INPUT_DELAY_MS.category = 'MEDIO';
        break;

      case 'SLOW':
        this.FIDColor = 'red';
        metrics.FIRST_INPUT_DELAY_MS.category = 'LENTO';
        break;
    }

    switch (CLSCategory) {
      case 'FAST':
        this.CLSColor = 'green';
        metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE.category = 'RAPIDO';
        break;

      case 'AVERAGE':
        this.CLSColor = 'orange';
        metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE.category = 'MEDIO';
        break;

      case 'SLOW':
        this.CLSColor = 'red';
        metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE.category = 'LENTO';
        break;
    }
  }
}
