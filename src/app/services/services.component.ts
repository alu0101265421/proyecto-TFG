import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, take } from 'rxjs';
import result from './result.json';

export interface DocResult {
  guidelines: Guideline[];
  title: string;
}

export interface Guideline {
  name: string;
}

export interface ApiResult {
  categories: {
    error: Category;
    alert: Category;
  };
  statistics: {
    pagetitle: string;
    url: string;
    time: number;
    creditsremaining: number;
  };
}

export interface Category {
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

@Injectable({
  providedIn: 'root',
})
export class ServicesComponent {
  apiKey: string = 'GAUF5e4a2782';
  URL_base: string = 'https://wave.webaim.org/api';
  constructor(private http: HttpClient) {}

  consultarApi(url: string): Promise<ApiResult | null> {
    try {
      //return lastValueFrom(this.http.get(`${this.URL_base}/request?key=${this.apiKey}&reporttype=2&url=${url}`).pipe(take(1)));
      return Promise.resolve(result as unknown as ApiResult);
    } catch (error) {
      console.error(error);
      return Promise.resolve(null);
    }
  }

  consultarID(id: string = 'alt_link_missing') {
    try {
      //https://wave.webaim.org/api/docs?id=alt
      return lastValueFrom(
        this.http.get<DocResult>(`${this.URL_base}/docs?id=${id}`).pipe(take(1))
      );
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
