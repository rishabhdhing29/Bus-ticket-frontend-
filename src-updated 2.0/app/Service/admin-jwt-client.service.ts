import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Admin } from '../Model/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminJwtClientService {

 


  baseURL: string = 'http://localhost:8181/api/v1/admins/';
  constructor(private http: HttpClient) { }

  getGeneratedToken(requestBody: any) {

    return this.http.post(this.baseURL + "authenticate", requestBody, { responseType: 'text' as 'json' });

  }

  alladmins(token: any): Observable<Admin[]> {
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders().set("Authorization", tokenString);
  
    return this.http.get<Admin[]>(this.baseURL + "getall", { headers });
  }
  
  authenticate(credentials: any): Observable<any> {
    return this.http.post(this.baseURL + 'authenticate', credentials, {
      responseType: 'text' as 'json'
    });
  }

  delete(adminId: number, token: string): Observable<any> {
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders().set("Authorization", tokenString);

    return this.http.delete<any>(`${this.baseURL}delete/${adminId}`, { headers });
  }

  updateAdmin(admins: Admin, token: string): Observable<any> {
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders().set("Authorization", tokenString);
   return this.http.put<any>(`${this.baseURL}update/${admins.adminId}`,admins,{headers});
  }

  


}
