import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {UserlandingpageComponent} from './userlandingpage/userlandingpage.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RegistereventComponent } from './registerevent/registerevent.component';
import { EventdetailpageComponent } from './eventdetailpage/eventdetailpage.component';
import { CeventdetailpageComponent } from './ceventdetailpage/ceventdetailpage.component';
import { ReventdetailpageComponent } from './reventdetailpage/reventdetailpage.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { VieweventsComponent } from './viewevents/viewevents.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AdmineventdetailpageComponent } from './admineventdetailpage/admineventdetailpage.component';
import { AddfeedbackComponent } from './addfeedback/addfeedback.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'landingpage',component:UserlandingpageComponent},
  {path:'addfeedback',component:AddfeedbackComponent},
  {path:'createevent',component:CreateEventComponent},
  {path:'userprofile',component:UserprofileComponent},
  {path:'auserprofile',component:AdminprofileComponent},
  {path:'registerevent',component:RegistereventComponent},
  {path:'eventdetails/:eventid',component:EventdetailpageComponent},
  {path:'ceventdetails/:eventid',component:CeventdetailpageComponent},
  {path:'reventdetails/:eventid',component:ReventdetailpageComponent},
  {path:'admineventdetailpage/:eventid',component:AdmineventdetailpageComponent},
  {path:'adminpanel',component:AdminpanelComponent},
  {path:'viewusers',component:ViewusersComponent},
  {path:'viewevents',component:VieweventsComponent},
  {path:'viewfeedback',component:ViewfeedbackComponent},
  {path:'',component:LoginComponent}// Handle other routes by redirecting to login page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
