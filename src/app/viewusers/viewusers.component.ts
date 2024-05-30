import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrl: './viewusers.component.css'
})
export class ViewusersComponent {
   constructor(private http:HttpClient,private router:Router) {
    this.viewusers();
   }
   nameFilter:string='';
   ageFilter:number=13;
   emailFilter:string='';
   registeredUsers:any
   nf={
     Name:this.nameFilter
   }
   af={
     Age:this.ageFilter
   }
   ef={
     EmailId:this.emailFilter
   }
   del=
   {
    EmailId:''
   }
   det={
    EmailId:''
   }
   viewusers()
   {
    this.http.get('https://localhost:7209/api/users/', { withCredentials: true })
    .toPromise()
    .then((response: any) => {
      console.log(response);
      this.registeredUsers=response;
    })
    .catch(error => {
      console.error('Registration failed', error);
      // Handle error, show appropriate message to user
    });
  }
  filterByAge() {
    this.af=
    {
      Age:this.ageFilter
    }
    console.log(this.af);
    this.http.post('https://localhost:7209/api/users/getuserbyage', this.af, { withCredentials: true })
    .toPromise()
      .then((response: any) => {
        console.log(response);
        console.log(response.Data);
        this.registeredUsers = response;
      })
      .catch(error => {
        console.error('Registration failed', error);
        // Handle error, show appropriate message to user
      });
  }
  
  detailuser(email:string)
  {
    this.del={
      EmailId:email
    }
  }

  deleteuser(email:string)
  {
    this.del={
      EmailId:email
    }
    console.log(this.del);
    Swal.fire({
      title: 'Do you want to delete user?',
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
          this.http.post('https://localhost:7209/api/admins/deleteuser', this.del,{ withCredentials: true })
            .toPromise()
            .then((response: any) => {
              console.log(response);
              if(response=="User deleted successfully")
              {
                Swal.fire({
                  title: "Event Galore",
                  text: "Deleted Successfully",
                  icon: "success"
                });
                window.location.reload();
              }
            })
            .catch(error => {
              console.error('Deletion failed', error);
              // Handle error, show appropriate message to user
            });
      } 
    })
  }

  filterByEmail() {
    this.ef={
      EmailId:this.emailFilter
    }
    this.http.post<string>('https://localhost:7209/api/users/getuserbyemail', this.ef, {withCredentials: true })
    .toPromise()
      .then((response: any) => {
        console.log(response);
        console.log(response.Data);
        this.registeredUsers = response;
      })
      .catch(error => {
        console.error('Registration failed', error);
        // Handle error, show appropriate message to user
      });
  }
  filterByName() {
    this.nf={
      Name:this.nameFilter
    }
    this.http.post('https://localhost:7209/api/users/getuserbyname', this.nf, { withCredentials: true })
    .toPromise()
      .then((response: any) => {
        console.log(response);
        console.log(response.Data);
        this.registeredUsers = response;
      })
      .catch(error => {
        console.error('Registration failed', error);
        // Handle error, show appropriate message to user
      });
  }
}
