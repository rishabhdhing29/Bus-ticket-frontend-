import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AdminManagementComponent } from './Components/admin-management/admin-management.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { AdminCreateComponent } from './Components/admin-create/admin-create.component';
import { AdminUIComponent } from './Components/admin-ui/admin-ui.component';
import { UserSignupComponent } from './Components/user-signup/user-signup.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UserUiComponent } from './Components/user-ui/user-ui.component';
import { UserUpdateComponent } from './Components/user-update/user-update.component';
import { DisplayAllAdminComponent } from './Components/display-all-admin/display-all-admin.component';
import { BusOperatorSignupComponent } from './Components/bus-operator-signup/bus-operator-signup.component';
import { BusOperatorLoginComponent } from './Components/bus-operator-login/bus-operator-login.component';
import { OperatorUiComponent } from './Components/operator-ui/operator-ui/operator-ui.component';
import { UpdateAdminComponent } from './Components/update-admin/update-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AdminManagementComponent,
    HomeComponent,
    AdminCreateComponent,
    AdminUIComponent,
    UserSignupComponent,
    UserLoginComponent,
    UserUiComponent,
    UserUpdateComponent,
    DisplayAllAdminComponent,
    BusOperatorSignupComponent,
    BusOperatorLoginComponent,
    OperatorUiComponent,
    UpdateAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
