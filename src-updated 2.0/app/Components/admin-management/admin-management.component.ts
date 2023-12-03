import { Component, OnInit } from '@angular/core';
import { AuthRequest } from '../../Model/AuthRequest';
import { AdminJwtClientService } from '../../Service/admin-jwt-client.service';
import { Router } from '@angular/router';
import { TokenServiceService } from 'src/app/Service/token/token-service.service';

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.css']
})
export class AdminManagementComponent implements OnInit {
  response: any;
  token: any;
  authRequest: AuthRequest = new AuthRequest();

  constructor(private jwtService: AdminJwtClientService, private router: Router,private tokenService:TokenServiceService) {}

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
      this.tokenService.setToken(this.token);
      this.router.navigate(['/adminUI']);
    });
  }

  // public accessApi(token: any) {
  //   let response = this.jwtService.authorizationTest(token);

  //   response.subscribe((responseData) => {
  //     this.response = responseData;
  //     console.log(responseData);

  //     // Assuming successful authentication
  //     // Navigate to the admin UI upon successful login
  //     this.router.navigate(['/adminUI']);
  //   });
  // }
}
