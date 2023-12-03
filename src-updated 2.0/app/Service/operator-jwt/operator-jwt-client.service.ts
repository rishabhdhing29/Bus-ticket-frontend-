import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Operator } from 'src/app/Model/busoperator.model';

@Injectable({
  providedIn: 'root'
})
export class OperatorJwtClientService {
  

  apiUrl: string = 'http://localhost:8181/api/v1/busoperators/';
  constructor(private http: HttpClient) { }

  getGeneratedToken(requestBody: any) {

    return this.http.post(this.apiUrl + "authenticate", requestBody, { responseType: 'text' as 'json' });

  }

  authorizationTest(token: any) {

    let tokenString = "Bearer " + token;

    const headers = new HttpHeaders().set("Authorization", tokenString);

    return this.http.get(this.apiUrl+"getall", { headers, responseType: 'text' as 'json' });

  }
}
