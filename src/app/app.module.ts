import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { UserlandingpageComponent } from './userlandingpage/userlandingpage.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RegistereventComponent } from './registerevent/registerevent.component';
import { EventdetailpageComponent } from './eventdetailpage/eventdetailpage.component';
import { CeventdetailpageComponent } from './ceventdetailpage/ceventdetailpage.component';
import { ReventdetailpageComponent } from './reventdetailpage/reventdetailpage.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AnavbarComponent } from './anavbar/anavbar.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { VieweventsComponent } from './viewevents/viewevents.component';
import { AdmineventdetailpageComponent } from './admineventdetailpage/admineventdetailpage.component';
import { FooterComponent } from './footer/footer.component';
import { AcreateventComponent } from './acreatevent/acreatevent.component';
import { CfeedbackComponent } from './cfeedback/cfeedback.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AddfeedbackComponent } from './addfeedback/addfeedback.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
import { UpdateadminComponent } from './updateadmin/updateadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CreateEventComponent,
    UserlandingpageComponent,
    UserprofileComponent,
    NavbarComponent,
    AdminloginComponent,
    RegistereventComponent,
    EventdetailpageComponent,
    CeventdetailpageComponent,
    ReventdetailpageComponent,
    AdminpanelComponent,
    AnavbarComponent,
    AdminprofileComponent,
    ViewusersComponent,
    VieweventsComponent,
    AdmineventdetailpageComponent,
    FooterComponent,
    AcreateventComponent,
    CfeedbackComponent,
    UpdateuserComponent,
    AddfeedbackComponent,
    ViewfeedbackComponent,
    UpdateadminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
