import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {


  constructor(private loginService: LoginService,private router: Router) {}

  login(){
    this.loginService.login;
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

}
