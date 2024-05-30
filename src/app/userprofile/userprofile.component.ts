import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent {
  userDetails: any;
  constructor(private http: HttpClient, private router: Router) {
    this.UserDetails();
  }

  createdEvents: any[] = [];
  registeredEvents: any[] = [];

  selectedTab: string = 'created';

  toggleTab(tab: string): void {
    this.selectedTab = tab;
  }

  logout() {

    Swal.fire({
      title: 'Do you want to logout?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then((result) => {
      if (result.isConfirmed) {
          this.http.get('https://localhost:7209/api/users/logout', { withCredentials: true })
            .toPromise()
            .then((response: any) => {
              console.log(response);
              if(response.Data=="Cookie Deleted")
              {
                Swal.fire({
                  title: "Event Galore",
                  text: "Logout successfull",
                  icon: "success"
                });
                this.router.navigate(['/login']);
              }
            })
            .catch(error => {
              Swal.fire({
                title: "Event Galore",
                text: "Some error occured",
                icon: "error"
              });
              console.error('Registration failed', error);
              // Handle error, show appropriate message to user
            });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

  }

  cregisteredusers(eventid:any)
  {
    this.router.navigate(['/ceventdetails',eventid])
  }
  rregisteredusers(eventid:any)
  {
    this.router.navigate(['/reventdetails',eventid])
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
}
