import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Operator } from 'src/app/Model/busoperator.model';
import { User } from 'src/app/Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  apiUrl: string = 'http://localhost:8181/api/v1/busoperators/';

  constructor(private http: HttpClient) {}

  createOperator(operator: Operator): Observable<Operator> {
    return this.http.post<Operator>(this.apiUrl + 'create', operator);
  }
  getAll(): Observable<Operator[]> {
    return this.http.get<Operator[]>(this.apiUrl+"getall");
  }
}
