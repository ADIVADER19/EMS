import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userData = {
    FirstName: '',
    LastName: '',
    EmailId: '',
    Age:0,
    PhoneNo:0,
    Password: '',
    ConfirmPassword: '',
  };
  constructor(private http: HttpClient, private router: Router) { }
  

  registerUser() {
    this.http.post('https://localhost:7209/api/users/register', this.userData)
      .toPromise()
      .then((response: any) => {
        console.log(response);
        console.log(response.Data);
        if (response.Data =="User registered successfully") {
          Swal.fire({
            title: "Event Galore",
            text: "Registration successful",
            icon: "success"
          });
          this.router.navigate(['login']);
        } else {
          Swal.fire({
            title: "Event Galore",
            text: "User already exists",
            icon: "warning"
          });
        }
      })
      .catch(error => {
        console.error('Registration failed', error);
        // Handle error, show appropriate message to user
      });
  }

  login()
  {
    this.router.navigate(['login']);
  }
}
