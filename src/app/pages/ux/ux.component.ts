import { Component, OnInit } from '@angular/core';
import {
  IEstructuraUX,
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
  public LCP?: IEstructuraUX;
  public FID?: IEstructuraUX;
  public CLS?: IEstructuraUX;

  constructor(private uxService: UxApiService) {}

  async ngOnInit(): Promise<void> {
    this.resultadosUX = await this.uxService.analizarUX(
      'https://www.parcan.es/'
    );

    if (!this.resultadosUX?.originLoadingExperience) return;

    console.log(this.resultadosUX);

    const origenResult = this.resultadosUX.originLoadingExperience;

    console.log(origenResult);

    this.LCP = origenResult.metrics.LARGEST_CONTENTFUL_PAINT_MS;
    this.FID = origenResult.metrics.FIRST_INPUT_DELAY_MS;
    this.CLS = origenResult.metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE;

    this.FID.category;
    const aux = this.uxService.traducirCategoriaEsp(this.LCP.category);
    console.log('traducion', aux);

    console.log(this.LCP);
    console.log(this.FID);
    console.log(this.CLS);
  }
}
