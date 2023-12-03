import { Component,OnInit} from '@angular/core';
import { Admin } from '../../Model/admin.model';
import { AdminService } from '../../Service/admin.service';
import { AdminJwtClientService } from 'src/app/Service/admin-jwt-client.service';
import { TokenServiceService } from 'src/app/Service/token/token-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-ui',
  templateUrl: './admin-ui.component.html',
  styleUrls: ['./admin-ui.component.css']
})
export class AdminUIComponent {
  token: any; // Define the token property
  admin: Admin = {
    adminId: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
  };


  constructor(private router:Router,private adminService: AdminJwtClientService,private tokenservice:TokenServiceService) {}

  getalladmins() {
    this.token=this.tokenservice.getToken();
    this.adminService.alladmins(this.token).subscribe(
      (response) => {
        console.log(response); // Display the response in the console
      
        this.router.navigate(['/display-all-admin']);

      }
     
    );
  }
  
  updateAdmin(adminId: number) {
    const token = this.tokenservice.getToken();

    this.admin.adminId = adminId;

    this.adminService.updateAdmin(this.admin, token).subscribe(
      (response) => {
       
        this.router.navigate(['/update-admin']);
        // Handle success scenario if needed
      },
      (error) => {
        console.error('Error updating admin:', error);
        // Handle error scenario if needed
      }
    );
  }
     

  
  logout() {
    // Clear the token when logging out
    this.tokenservice.clearToken();
    this.router.navigate(['/admin']);
  }
}
