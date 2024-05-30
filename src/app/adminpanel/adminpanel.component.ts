import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrl: './adminpanel.component.css'
})
export class AdminpanelComponent {
  constructor(private router:Router,private http:HttpClient)
    {

    }
  viewusers()
  {
    
    this.router.navigate(['/viewusers'])
  }
  viewevents()
  {
    this.router.navigate(['/viewevents'])
  }

  viewfeedback()
  {
    this.router.navigate(['/viewfeedback'])
  }
  

}
