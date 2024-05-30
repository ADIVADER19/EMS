import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData = {
    EmailId: '',
    Password: '',
  };
  adminData = {
    EmailId: '',
    Password: '',
  };
  selectedTab: string = 'User';

  toggleTab(tab: string): void {
    this.selectedTab = tab;
  }
  constructor(private http: HttpClient, private router:Router) { 
    this.UserDetails();
  }
  UserDetails() {
    this.http.get('https://localhost:7209/api/users/cuserprofile',{withCredentials:true})
      .toPromise()
      .then((response: any) => {
        console.log(response);
        console.log(response.Data);
        if(response.Data!=null)
        {
          this.router.navigate(['/landingpage'])
        }
      })
      .catch(error => {
        console.error('Registration failed', error);
        // Handle error, show appropriate message to user
      });
  }
  loginUser() {
    this.http.post('https://localhost:7209/api/users/login', this.userData,{withCredentials:true})
      .toPromise().then((response:any)=>{
        if(response.Data=="Login successfull")
        {
          Swal.fire({
            title: "Event Galore",
            text: "Login Successfull",
            icon: "success"
          });
          this.router.navigate(['/landingpage']);
        }
        else if(response.Data=="User with this email does not exsist")
        {
          Swal.fire({
            title: "Event Galore",
            text: "User with this email does not exsist",
            icon: "error"
          });
        }
        else
        {
          Swal.fire({
            title: "Event Galore",
            text: "Incorrect Password",
            icon: "error"
          });
        }
      }
      );
  }
  loginAdmin() {
    this.http.post('https://localhost:7209/api/admins/adminlogin', this.adminData,{withCredentials:true})
      .toPromise().then((response:any)=>{
        if(response.Data=="Login successfull")
        {
          Swal.fire({
            title: "Event Galore",
            text: "Login Successfull",
            icon: "success"
          });
          this.router.navigate(['/adminpanel']);
        }
        else if(response.Data=="Admin with this email does not exsist")
        {
          Swal.fire({
            title: "Event Galore",
            text: "Admin with this email does not exsist",
            icon: "error"
          });
        }
        else
        {
          Swal.fire({
            title: "Event Galore",
            text: "Incorrect Password",
            icon: "error"
          });
        }
      }
      );
  }
  registerUser()
  {
    this.router.navigate(['/register']);
  }
}
