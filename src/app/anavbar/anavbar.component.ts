import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anavbar',
  templateUrl: './anavbar.component.html',
  styleUrl: './anavbar.component.css'
})
export class AnavbarComponent {
  constructor(private http:HttpClient,private router:Router){}
  auserprofile()
  {
    this.router.navigate(['/auserprofile'])
  }
}
