import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService,private router: Router, private loginService: LoginService,private http: HttpClient) {}

  buttonText: string = '';
  userPicture: string = '';
  LoginStatusInfo:boolean = false;
  isButtonMyListVisible: boolean = false;


  ngOnInit() {
    this.loginService.checkLogin().subscribe(isAuthenticated => {
      if (isAuthenticated) {
        // Usuario autenticado
        this.buttonText = 'Log Out';
        this.auth.user$.subscribe(user => {
          this.userPicture = user?.picture || '';
          if (this.userPicture) {
            this.http.get(this.userPicture, { responseType: 'blob' }).subscribe(response => {
              this.createImageFromBlob(response);
            });
          }
        });
        this.showButton();
      } else {
        this.buttonText = 'Login';
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

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener('load', () => {
      this.userPicture = reader.result as string;
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
  }

  hideButton() {
    this.isButtonMyListVisible = false;
  }

  showButton() {
    this.isButtonMyListVisible = true;
  }
}
