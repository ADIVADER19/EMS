import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css'
})
export class UpdateuserComponent {
  userData = {
    FirstName: '',
    LastName:'',
    Email: '',
    Age:0,
    Password: '',
    ConfirmPassword:''
  };
 
  constructor(private http: HttpClient, private router: Router) { }
 
  editUser() {
    this.http.put(`https://localhost:7112/api/users/updateuser`, this.userData, {withCredentials: true})
      .subscribe(
        response => {
          console.log('User', response);
          
          this.router.navigate(['userprofile']);
          
         
        },
        error => {
          console.error('EditUser failed', error);
          alert("Try again. Error");
        }
      );
  }
}
