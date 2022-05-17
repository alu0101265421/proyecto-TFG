import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, take } from 'rxjs';

export interface IUxResult {
  analysisUTCTimestamp: string;
  captchaResult: string;
  id: string;
  kind: string;
  lighthouseResult: any[];
  loadingExperience: any[];
  originLoadingExperience: IOrigenResult;
}
export interface IOrigenResult {
  id: string;
  initial_url: string;
  metrics: IMetricas;
  overall_category: string;
}
export interface IMetricas {
  CUMULATIVE_LAYOUT_SHIFT_SCORE: IEstructuraUX;
  EXPERIMENTAL_INTERACTION_TO_NEXT_PAINT: IEstructuraUX;
  EXPERIMENTAL_TIME_TO_FIRST_BYTE: IEstructuraUX;
  FIRST_CONTENTFUL_PAINT_MS: IEstructuraUX;
  FIRST_INPUT_DELAY_MS: IEstructuraUX;
  LARGEST_CONTENTFUL_PAINT_MS: IEstructuraUX;
}
export interface IEstructuraUX {
  percentile: number;
  distributions: any[];
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class UxApiService {
  URL_BASE: string =
    'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?';

  private elemento: string = '';

  constructor(private http: HttpClient) {}

  analizarUX(url: string) {
    try {
      return lastValueFrom(
        this.http
          .get<IUxResult>(
            `${this.URL_BASE}url=${url}&key=AIzaSyAVyAt1dQvCvHFl_T1AB1o9tS-297m4vec`
          )
          .pipe(take(1))
      );
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
