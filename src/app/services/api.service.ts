import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map, take } from 'rxjs';
import result from './result.json';

export interface IAnalisisResult {
  categories: {
    error: ICategory;
    alert: ICategory;
  };
  statistics: {
    pagetitle: string;
    url: string;
    time: number;
    creditsremaining: number;
  };
}

export interface ICategory {
  description: string;
  count: number;
  items: {
    [key: string]: {
      id: string;
      description: string;
      count: number;
    };
  };
}

export interface IDocResult {
  guidelines: IGuideline[];
  title: string;
}

export interface IGuideline {
  name: string;
}

export interface ICategoria {
  tipo: string;
  pautas: {
    titulo: string;
    criterios: ICriterio[];
  }[];
}

export interface ICriterio {
  id: string;
  titulo: string;
  descripcion: string;
  link?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API_KEY: string = 'GAUF5e4a2782';
  URL_BASE: string = 'https://wave.webaim.org/api';
  constructor(private http: HttpClient) {}

  analizarWeb(url: string): Promise<IAnalisisResult> | null {
    try {
      // return lastValueFrom(
      //   this.http
      //     .get<IAnalisisResult>(
      //       `${this.URL_BASE}/request?key=${this.API_KEY}&reporttype=2&url=${url}`
      //     )
      //     .pipe(take(1))
      // );
      return Promise.resolve(result as unknown as IAnalisisResult);
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  consultarDoc(id: string = 'alt_link_missing'): Promise<IDocResult> | null {
    try {
      //https://wave.webaim.org/api/docs?id=alt
      return lastValueFrom(
        this.http
          .get<IDocResult>(`${this.URL_BASE}/docs?id=${id}`)
          .pipe(take(1))
      );
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
