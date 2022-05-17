import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IEstructuraUX,
  IOrigenResult,
  IUxResult,
  UxApiService,
} from 'src/app/services/ux-api.service';

@Component({
  selector: 'app-ux-congreso',
  templateUrl: './ux-congreso.component.html',
  styleUrls: ['./ux-congreso.component.css'],
})
export class UxCongresoComponent implements OnInit {
  public resultadosUX!: IUxResult | null;

  public inicial_url!: string;

  public LCP!: IEstructuraUX;
  public FID!: IEstructuraUX;
  public CLS!: IEstructuraUX;

  LCPColor!: string;
  FIDColor!: string;
  CLSColor!: string;

  origenResult!: IOrigenResult;

  public progressBar = false;

  constructor(private uxService: UxApiService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    this.progressBar = true;

    this.resultadosUX = await this.uxService.analizarUX(
      'https://www.congreso.es/'
    );

    this.progressBar = false;

    if (!this.resultadosUX?.originLoadingExperience) return;

    console.log(this.resultadosUX);

    this.inicial_url = this.resultadosUX.originLoadingExperience.initial_url;

    this.origenResult = this.resultadosUX.originLoadingExperience;

    console.log(this.origenResult);

    this.LCP = this.origenResult.metrics.LARGEST_CONTENTFUL_PAINT_MS;
    this.FID = this.origenResult.metrics.FIRST_INPUT_DELAY_MS;
    this.CLS = this.origenResult.metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE;

    this.asignarColores();

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
        metrics.LARGEST_CONTENTFUL_PAINT_MS.category = 'RÁPIDO';
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
        metrics.FIRST_INPUT_DELAY_MS.category = 'RÁPIDO';
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
        metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE.category = 'RÁPIDO';
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
