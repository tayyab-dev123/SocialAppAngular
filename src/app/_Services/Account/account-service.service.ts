import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountServiceService {
  constructor(private http: HttpClient) {}

  baseURL: string = 'https://localhost:7278/api/';

  login(model: any) {
    return this.http.post(this.baseURL + 'account/login', model);
  }
}
