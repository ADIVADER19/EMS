import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewevents',
  templateUrl: './viewevents.component.html',
  styleUrl: './viewevents.component.css'
})
export class VieweventsComponent {
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
  constructor(private http:HttpClient,private router:Router){
    this.Events()
  }
  
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
  viewdetails(eventid:number)
  {
    this.router.navigate(['/admineventdetailpage',eventid])
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
