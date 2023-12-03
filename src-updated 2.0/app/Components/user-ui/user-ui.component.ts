import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user.model';
import { TokenServiceService } from 'src/app/Service/token/token-service.service';
import { UserJwtClientService } from 'src/app/Service/user-jwt/user-jwt-client.service';

@Component({
  selector: 'app-user-ui',
  templateUrl: './user-ui.component.html',
  styleUrls: ['./user-ui.component.css']
})
export class UserUiComponent {

  token: any;
  userToUpdate: User = new User();
  constructor(private router:Router,private userService:UserJwtClientService,private tokenservice:TokenServiceService){}
  updateFormData() {
   
    this.token=this.tokenservice.getToken();
      this.userService.update(this.userToUpdate, this.token).subscribe(
        (response) => {
          console.log('User updated:', response);
          // Handle the updated user data here
          this.router.navigate(['/user-update']);
        }
      );
    
  
  
}
  
}
