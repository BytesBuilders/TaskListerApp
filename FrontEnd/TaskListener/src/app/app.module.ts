import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthModule } from '@auth0/auth0-angular';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { FinalComponent } from './components/final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ErrorComponent,
    TaskListComponent,
    AddTaskComponent,
    SignUpComponent,
    ProfileComponent,
    FinalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    AuthModule.forRoot({
      domain: 'dev-rfjvdykbu6jiqssy.us.auth0.com',
      clientId: 'qbV6aUETUhLXK6cinGG6kwTVChPYNzv0',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
