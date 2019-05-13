import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }


  get<T>(apiURL: string, data: any = {}) {
    return this.http.get<T>(this.parseURL(apiURL), {
      headers: this.getHeaders(),
      params: this.parseGetParams(data)
    });
  }

  private getHeaders(): HttpHeaders {
    const headers = {
      Authorization: `Bearer for-another-time()`,
    };

    return new HttpHeaders(headers);
  }

  private parseURL(apiURL: string) {
    return `${environment.host}/${apiURL}`;
  }

  private parseGetParams(data): HttpParams {
    return new HttpParams({
      fromObject: data
    });
  }
}
