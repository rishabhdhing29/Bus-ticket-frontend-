import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminManagementComponent } from './Components/admin-management/admin-management.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminCreateComponent } from './Components/admin-create/admin-create.component';
import { AdminUIComponent } from './Components/admin-ui/admin-ui.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { UserSignupComponent } from './Components/user-signup/user-signup.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UserUiComponent } from './Components/user-ui/user-ui.component';
import { DisplayAllAdminComponent } from './Components/display-all-admin/display-all-admin.component';
import { UserUpdateComponent } from './Components/user-update/user-update.component';
import { BusOperatorSignupComponent } from './Components/bus-operator-signup/bus-operator-signup.component';
import { OperatorUiComponent } from './Components/operator-ui/operator-ui/operator-ui.component';
import { BusOperatorLoginComponent } from './Components/bus-operator-login/bus-operator-login.component';
import { UpdateAdminComponent } from './Components/update-admin/update-admin.component';


const routes: Routes = [
  { path: 'admin', component: AdminManagementComponent },
  {path:'home', component: HomeComponent},
  {path:'admin-create', component:AdminCreateComponent},
  {path:'adminUI', component:AdminUIComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'user-signup',component:UserSignupComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'userUI', component:UserUiComponent},
  {path:'display-all-admin',component:DisplayAllAdminComponent},
  {path:'user-update',component:UserUpdateComponent},
  {path:'bus-operator-signup',component:BusOperatorSignupComponent},
  {path:'operator-ui',component:OperatorUiComponent},
  {path:'bus-operator-login',component:BusOperatorLoginComponent},
  { path:'update-admin', component :UpdateAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
