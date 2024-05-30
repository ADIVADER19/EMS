import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlandingpage',
  templateUrl: './userlandingpage.component.html',
  styleUrl: './userlandingpage.component.css'
})
export class UserlandingpageComponent {
  greeting:string=''
  constructor(private http:HttpClient,private router: Router) { 
    this.setGreeting();
    this.UserDetails();
    
  }
  userDetails: any;
  setGreeting() {
    const currentTime = new Date().getHours();

    if (currentTime < 12) {
      this.greeting = 'Good Morning';
    } else if (currentTime < 17) {
      this.greeting = 'Good Afternoon';
    } else if (currentTime < 20) {
      this.greeting = 'Good Evening';
    } else {
      this.greeting = 'Good Night';
    }
  }
  UserDetails() {
    this.http.get('https://localhost:7209/api/users/cuserprofile', { withCredentials: true })
      .toPromise()
      .then((response: any) => {
        console.log(response);
        console.log(response.Data);
        this.userDetails = response.Data;
      })
      .catch(error => {
        console.error('Registration failed', error);
        // Handle error, show appropriate message to user
      });
  }
  createevent()
  {
    this.router.navigate(['/createevent']);
  }
  registerevent() { 
    this.router.navigate(['/registerevent']);
  }
  createfeedback()
  {
    this.router.navigate(['addfeedback']);
  }
  viewdetails()
  {
    this.router.navigate(['userprofile']);
  }
  updatedetails()
  {

  }

}
