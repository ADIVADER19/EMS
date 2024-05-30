import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-eventdetailpage',
  templateUrl: './eventdetailpage.component.html',
  styleUrl: './eventdetailpage.component.css'
})
export class EventdetailpageComponent {
  userdetails:any;
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
  eventdet:any
  eventid:any
  eid:any
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute){
    this.geteventid();

    this.UserDetails();
  }
   
  geteventid()
  {
 
    this.route.paramMap.subscribe(params=>{
      
        this.eventid=params.get('eventid');
        console.log('id',this.eventid);
      if(this.eventid!=null)
      {
        this.fetcheventdetails();
      }
    })
  }

  fetcheventdetails()
  {
    this.eid={
      EventId:this.eventid
    }
    console.log("eid",this.eid)
    this.http.post("https://localhost:7209/api/events/eventbyid", this.eid, { withCredentials: true })
    .toPromise()
    .then((response: any) => {
      console.log(response);
      console.log(response.Data);
      this.eventdet=response;
    })
    .catch(error => {
      console.error('Registration failed', error);
      // Handle error, show appropriate message to user
    });
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
    registerevent() {
      this.eventdata.Name = this.eventdet.name;
      this.eventdata.UserId = this.userdetails.UserId;
      this.eventdata.AgeLimit = this.eventdet.ageLimit;
      this.eventdata.Category = this.eventdet.category;
      this.eventdata.Contact = this.eventdet.contact;
      this.eventdata.CreatorId = this.eventdet.creatorId;
      this.eventdata.Description = this.eventdet.description;
      this.eventdata.EndDate = this.eventdet.endDate;
      this.eventdata.StartDate = this.eventdet.startDate;
      this.eventdata.ImageUrl = this.eventdet.imageUrl;
      this.eventdata.Cost = this.eventdet.cost;
      this.eventdata.EventType = this.eventdet.eventType;
      this.eventdata.Time = this.eventdet.time;
      this.eventdata.Venue = this.eventdet.venue;
      this.eventdata.EventId = this.eventdet.eventId;
      this.eventdata.UserLimit = this.eventdet.userLimit;
      console.log("event data", this.eventdata);



      this.http.post("https://localhost:7209/api/events/cregisterevent", this.eventdata, { withCredentials: true })
        .toPromise()
        .then((response: any) => {
          console.log(response);
          console.log(response.Data);
        })
        .catch(error => {
          console.error('Registration failed', error);
          // Handle error, show appropriate message to user
        });
    }
}
