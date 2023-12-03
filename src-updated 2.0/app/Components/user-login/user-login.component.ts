import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/Model/AuthRequest';
import { UserJwtClientService } from 'src/app/Service/user-jwt/user-jwt-client.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  

  response: any;
  token: any;
  authRequest: AuthRequest = new AuthRequest();

  constructor(private jwtService:UserJwtClientService, private router:Router){}

  ngOnInit(): void {
    // Perform initialization logic if needed
  }

  readFormData(formData: any) {
    if (formData.valid) {
      this.authRequest.username = formData.value.username;
      this.authRequest.password = formData.value.password;

      this.getAccessToken(this.authRequest);
    } else {
      
      alert('Please fill in the required fields.');
    }
  }

  public getAccessToken(authRequest: any) {
    let response = this.jwtService.getGeneratedToken(authRequest);

    response.subscribe((genToken) => {
      this.token = genToken;
      console.log(genToken);
      this.accessApi(this.token);
    });
  }

  public accessApi(token: any) {
    let response = this.jwtService.authorizationTest(token);

    response.subscribe((responseData) => {
      this.response = responseData;
      console.log(responseData);

      // Assuming successful authentication
      // Navigate to the admin UI upon successful login
      this.router.navigate(['/userUI']);
    });
  }

  
}
