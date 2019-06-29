import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  monthlySpendings: object;

  constructor(private http: HttpClient) { }

  public getSpendings (query) {
    return this.http.get(environment.baseUrl + '/salary', {
      params: query
    });
  }

  public getSalaryData() {
    return this.http.get(environment.baseUrl + '/data');
  }

  public setMonthlySpendings(data) {
    this.monthlySpendings = data;
  }

  public getMonthlySpendings() {
    return this.monthlySpendings;
  }
}
