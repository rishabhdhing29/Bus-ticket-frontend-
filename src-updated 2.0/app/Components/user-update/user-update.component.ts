import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user.model';
import { TokenServiceService } from 'src/app/Service/token/token-service.service';
import { UserJwtClientService } from 'src/app/Service/user-jwt/user-jwt-client.service';
//import { UserJwtClientService } from 'src/app/Service/user-jwt/user-jwt-client.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent {

  token: any;
  userToUpdate: User = new User();

  constructor(private router: Router, private userService: UserJwtClientService, private tokenService: TokenServiceService) { }

  onSubmit() {
    this.token = this.tokenService.getToken();
    this.userService.update(this.userToUpdate, this.token).subscribe(
      (response) => {
        console.log('User updated:', response);
        // Handle the updated user data here or perform necessary actions upon successful update
        // For example, redirect to a different route
      //  this.router.navigate(['/user-details']); // Redirect to user details page after update
      },
      (error) => {
        console.error('Error updating user:', error);
        // Handle error scenario if needed
      }
    );
  }

 
}
