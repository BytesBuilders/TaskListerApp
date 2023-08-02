import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Subscription } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService,private router: Router, private loginService: LoginService) {}

  buttonText: string = '';
  userName: string = '';
  LoginStatusInfo:boolean = false;
  isButtonMyListVisible: boolean = false;


  ngOnInit() {
    this.loginService.checkLogin().subscribe(isAuthenticated => {
      if (isAuthenticated) {
        // Usuario autenticado
        this.buttonText = 'Log Out';
        this.auth.user$.subscribe(user => {
          this.userName = user?.name || 'NoNameAccess';
          console.log("Nombre Usuario:", this.userName);
        });
        this.showButton();
      } else {
        this.buttonText = 'Login';
        this.userName = '';
        this.hideButton();
      }
    });
    console.log("Status Login:", this.LoginStatusInfo)
  }

  loginStatus() {
    this.loginService.IsLogged().subscribe(isAuth => {
      if (isAuth) {
        this.loginService.logOut();
      } else {
        this.loginService.login();
      }
    });
  }

  hideButton() {
    this.isButtonMyListVisible = false;
  }

  showButton() {
    this.isButtonMyListVisible = true;
  }
}
