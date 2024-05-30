import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admineventdetailpage',
  templateUrl: './admineventdetailpage.component.html',
  styleUrl: './admineventdetailpage.component.css'
})
export class AdmineventdetailpageComponent {
  eventdet:any
  eventid:any
  eid:any
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute){
    this.geteventid();
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

}
