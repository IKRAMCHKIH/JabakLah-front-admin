import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListAgentsComponent } from './list-agents/list-agents.component';

import { AgentAddFormComponent } from './agent-add-form/agent-add-form.component';
import { AdminLoginFormComponent } from './Components/admin-login-form/admin-login-form.component';
import { FormsModule } from '@angular/forms';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { AdminHeaderComponent } from './Components/admin-header/admin-header.component';
import { StartViewComponent } from './start-view/start-view.component';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from '../_helpers/auth.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotifComponent } from './notif/notif.component';

import { SucccessComponent } from './succcess/succcess.component';






@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListAgentsComponent,
    AgentAddFormComponent,
    AdminLoginFormComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    StartViewComponent,
    DashboardComponent,
    NotifComponent,
    SucccessComponent,
 
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
   
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
