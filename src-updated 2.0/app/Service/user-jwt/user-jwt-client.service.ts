import { HttpClient, HttpHeaders , HttpErrorResponse,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserJwtClientService {

  
  apiUrl: string = 'http://localhost:8181/api/v1/usercustomers/';
  constructor(private http: HttpClient) { }

  getGeneratedToken(requestBody: any) {

    return this.http.post(this.apiUrl + "authenticate", requestBody, { responseType: 'text' as 'json' });

  }

  authorizationTest(token: any) {

    let tokenString = "Bearer " + token;

    const headers = new HttpHeaders().set("Authorization", tokenString);

    return this.http.get(this.apiUrl+"getall", { headers, responseType: 'text' as 'json' });

  }

  // update(userObj:User):Observable<User>{

      
 
  //   console.log(userObj)
  //   return  this.http.put<User>(this.apiUrl+userObj.email,userObj);
           

    
  //   }

  update(userObj: User, token: string): Observable<User> {
    let tokenString = "Bearer " + token;
    const headers = new HttpHeaders().set("Authorization", tokenString);

    return this.http.put<User>(this.apiUrl + userObj.email, userObj, { headers });
  }

}
