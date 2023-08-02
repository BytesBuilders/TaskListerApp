// navbar.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router, private loginService: LoginService) {}

  buttonText: string = '';
  userName: string = '';

  ngOnInit() {
    this.loginService.checkLogin().subscribe(isAuthenticated => {
      if (isAuthenticated) {
        // Usuario autenticado
        this.buttonText = 'Log Out';
        this.userName = this.loginService.getName() || "Error";
        console.log("En navbar:" + this.loginService.getName());
      } else {
        this.buttonText = 'Login';
        this.userName = '';
        // Usuario no autenticado
        // Aquí colocas la lógica para el inicio de sesión
      }
    });
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
}
