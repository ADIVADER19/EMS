import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrl: './adminprofile.component.css'
})
export class AdminprofileComponent {
   constructor(private http:HttpClient,private router:Router){
    this.getadmindata();
   }
   admindata:any;
   getadmindata()
   {
    this.http.get('https://localhost:7209/api/admins/adminbyid', { withCredentials: true })
    .toPromise()
    .then((response: any) => {
      console.log(response);
      console.log(response.Data);
      this.admindata = response.Data;
    })
    .catch(error => {
      console.error('Registration failed', error);
      // Handle error, show appropriate message to user
    });
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
          this.http.get('https://localhost:7209/api/admins/adminlogout', { withCredentials: true })
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
                text: "Oops,Some error occured",
                icon: "success"
              });
              console.error('Registration failed', error);
              // Handle error, show appropriate message to user
            });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

  }
}
