import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/Model/AuthRequest';
import { OperatorJwtClientService } from 'src/app/Service/operator-jwt/operator-jwt-client.service';
import { TokenServiceService } from 'src/app/Service/token/token-service.service';

@Component({
  selector: 'app-bus-operator-login',
  templateUrl: './bus-operator-login.component.html',
  styleUrls: ['./bus-operator-login.component.css']
})
export class BusOperatorLoginComponent {

  response: any;
  token: any;
  authRequest: AuthRequest = new AuthRequest();

  constructor(private jwtService: OperatorJwtClientService, private router: Router,private tokenService:TokenServiceService) {}

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
      this.router.navigate(['/operator-ui']);
    });
  }

}
