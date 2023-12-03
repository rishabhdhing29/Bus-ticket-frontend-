import { Component } from '@angular/core';
import { AdminService } from '../../Service/admin.service';
import { Admin } from '../../Model/admin.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent {
  admin: Admin = new Admin(0, '', '', '', '', '');

  constructor(private adminService: AdminService,private router:Router) {}

  // onSubmit() {
  //   this.adminService.createAdmin(this.admin)
  //     .subscribe(
  //       (response) => {
  //         console.log('Admin created successfully!', response);
  //         // Handle success message or navigation
  //       })
        
  // }
  createAdmin(data: Admin){
    this.adminService.createAdmin(data)
    .subscribe(
      (response) => {
        console.log('Admin created successfully!', response);
        this.router.navigateByUrl('/admin');

        // Handle success message or navigation
      })
  }
}