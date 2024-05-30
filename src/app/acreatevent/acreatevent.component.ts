import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-acreatevent',
  templateUrl: './acreatevent.component.html',
  styleUrl: './acreatevent.component.css'
})
export class AcreateventComponent {
  constructor(private http: HttpClient, private router: Router) { }

  public eventData = {
    Name: '',
    Description: '',
    StartDate: '',
    EndDate: '',
    Venue: '',
    Time: '',
    Cost: 0,
    Category: '',
    AgeLimit: 0,
    UserLimit: 0,
    Contact: '',
    EventType: '',
    ImageUrl:''
  };

  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted!');
    console.log(this);
    
    this.http.post('https://localhost:7209/api/events/acreatevent', this.eventData,{withCredentials:true})
      .toPromise()
      .then((response: any) => {
        console.log(response);
        console.log(response.Data);
        if (response.Data =="Event Created Successfully") {
          Swal.fire({
            title: "Event Galore",
            text: "Event Created  successfuly",
            icon: "success"
          });
          this.router.navigate(['adminpanel']);
        } else if(response.Data=="Event already has a creator") {
          Swal.fire({
            title: "Event Galore",
            text: "User already exists",
            icon: "warning"
          });
        }
        else
        {
          Swal.fire({
            title: "Event Galore",
            text: "Oops! Error occured",
            icon: "error"
          });
        }
      })
      .catch(error => {
        console.error('OOps error occured', error);
        // Handle error, show appropriate message to user
      });
  }
}
