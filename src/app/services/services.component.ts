import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, take } from 'rxjs';
//import result from './result.json';

export interface DocResult{
  guidelines: Guideline[];
  title: string;
}

export interface Guideline{
  name: string;
}

@Injectable({
  providedIn: 'root'
})

export class ServicesComponent {

  apiKey: string = 'GAUF5e4a2782';
  URL_base: string = 'https://wave.webaim.org/api';
  constructor(private http: HttpClient) { }
  
  //https://wave.webaim.org/api/request?key={yourAPIkey}&reporttype=4&url=

  consultarApi(url: string){
    try {
      
      //return lastValueFrom(this.http.get(`${this.URL_base}/request?key=${this.apiKey}&reporttype=4&url=${url}`).pipe(take(1))); 
      //return result; PROBLEMA NO ME DEJA ACCEDER A ESTE FICHERO JSON
      return null;
      
    } catch (error) {

      console.error(error);
      return null;
    }
  }  

  consultarID(id: string = 'alt_link_missing'){

    try {
      //https://wave.webaim.org/api/docs?id=alt
      return lastValueFrom(this.http.get<DocResult>(`${this.URL_base}/docs?id=${id}`).pipe(take(1))); 

    } catch (error) {

      console.error(error);
      return null;
    }
  }

}
