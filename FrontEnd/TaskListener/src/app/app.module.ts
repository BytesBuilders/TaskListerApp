import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthModule } from '@auth0/auth0-angular';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ErrorComponent,
    TaskListComponent,
    AddTaskComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
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
