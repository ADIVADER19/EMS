import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.component.html',
  styleUrl: './addfeedback.component.css'
})
export class AddfeedbackComponent {
  constructor(private http:HttpClient,private router:Router){}
  FeedbackType: string='';
  Subject: string='';
  Content: string='';
  feeddata={
    FeedbackType:'',
    Subject:'',
    Content:''
  }
  PostFeedback()
  {
    if(this.FeedbackType=='' || this.Subject=='' || this.Content=='')
    {
      Swal.fire({
        title: "Event Galore",
        text: "Enter all the fields",
        icon: "warning"
      });
    }
    else
    {
      this.feeddata
      ={
        FeedbackType:this.FeedbackType,
        Subject:this.Subject,
        Content:this.Content
      }
      this.http.post('https://localhost:7209/api/Feedback/addfeedback', this.feeddata,{withCredentials:true})
    .toPromise()
    .then((response: any) => {
      console.log(response);
      console.log(response.Data);
      if (response.Data =="Feedback added successfully") {
        Swal.fire({
          title: "Event Galore",
          text: "Thank you for your feedback",
          icon: "success"
        });
        this.router.navigate(['landingpage']);
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

    
}

}
