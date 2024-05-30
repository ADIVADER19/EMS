import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registerevent',
  templateUrl: './registerevent.component.html',
  styleUrl: './registerevent.component.css'
})
export class RegistereventComponent {


  eventdata =
    {
      EventId: 0,
      UserId: 0,
      CreatorId: 0,
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
      ImageUrl: '',
    }

  userdetails: any
  priceFilter:any=0
  categoryFilter: any=''
  dateFilter: any='';
  pf={
    Price:this.priceFilter
  }
  df={
    Date:this.dateFilter
  }
  cf={
    Category:this.categoryFilter
  }
eventDetails: any;


  constructor(private http: HttpClient, private router: Router) {
    this.UserDetails();
    this.Events();
  }

  UserDetails() {
    this.http.get('https://localhost:7209/api/users/cuserprofile', { withCredentials: true })
      .toPromise()
      .then((response: any) => {
        console.log(response);
        console.log(response.Data);
        this.userdetails = response.Data;
      })
      .catch(error => {
        console.error('Registration failed', error);
        // Handle error, show appropriate message to user
      });
  }

  registerevent(eventdet: any) {
    console.log(eventdet);
    console.log(eventdet.name);
    this.eventdata.Name = eventdet.name;
    this.eventdata.UserId = this.userdetails.UserId;
    this.eventdata.AgeLimit = eventdet.ageLimit;
    this.eventdata.Category = eventdet.category;
    this.eventdata.Contact = eventdet.contact;
    this.eventdata.CreatorId = eventdet.creatorId;
    this.eventdata.Description = eventdet.description;
    this.eventdata.EndDate = eventdet.endDate;
    this.eventdata.StartDate = eventdet.startDate;
    this.eventdata.ImageUrl = eventdet.imageUrl;
    this.eventdata.Cost = eventdet.cost;
    this.eventdata.EventType = eventdet.eventType;
    this.eventdata.Time = eventdet.time;
    this.eventdata.Venue = eventdet.venue;
    this.eventdata.EventId = eventdet.eventId;
    this.eventdata.UserLimit = eventdet.userLimit;
    console.log("event data", this.eventdata);
    this.http.post("https://localhost:7209/api/events/cregisterevent", this.eventdata, { withCredentials: true })
      .toPromise()
      .then((response: any) => {
        console.log(response);
        console.log(response.Data);
        if(response.Data=="Successfully registered for event")
        {
          Swal.fire({
            title: "Event Galore",
            text: "Successfully registered for event",
            icon: "success"
          });
        }
        else if(response.Data=="User cannot join event that he has created")
        {
          Swal.fire({
            title: "Event Galore",
            text: "User cannot join event he has created",
            icon: "warning"
          });
        }
        else
        {
          Swal.fire({
            title: "Event Galore",
            text: "User  has already registered for this event",
            icon: "warning"
          });
        }
      })
      .catch(error => {
        console.error('Registration failed', error);
        // Handle error, show appropriate message to user
      });
  }

  viewdetails(eventid:number)
  {
    this.router.navigate(['/eventdetails',eventid])
  }

  events: any
  Events() {
    this.http.get('https://localhost:7209/api/events/events', { withCredentials: true })
      .toPromise()
      .then((response: any) => {
        console.log(response);
        this.events = response;
      })
      .catch(error => {
        console.error('Registration failed', error);
        // Handle error, show appropriate message to user
      });


  }
  filterByDate() {
    this.df
    {
      Date=this.dateFilter
    }
    console.log(this.df);
    this.http.post('https://localhost:7209/api/events/geteventdate', this.df, { withCredentials: true })
    .toPromise()
      .then((response: any) => {
        console.log(response);
        console.log(response.Data);
        this.eventdata = response;
      })
      .catch(error => {
        console.error('Registration failed', error);
        // Handle error, show appropriate message to user
      });
  }

  filterByCategory() {
    this.cf={
      Category:this.categoryFilter
    }
    this.http.post<string>('https://localhost:7209/api/events/geteventcat', this.cf, {withCredentials: true })
    .toPromise()
      .then((response: any) => {
        console.log(response);
        console.log(response.Data);
        this.events = response;
      })
      .catch(error => {
        console.error('Registration failed', error);
        // Handle error, show appropriate message to user
      });
  }
  filterByPrice() {
    this.pf={
      Price:this.priceFilter
    }
    this.http.post('https://localhost:7209/api/events/geteventcost', this.pf, { withCredentials: true })
    .toPromise()
      .then((response: any) => {
        console.log(response);
        console.log(response.Data);
        this.events = response;
      })
      .catch(error => {
        console.error('Registration failed', error);
        // Handle error, show appropriate message to user
      });
  }
}
