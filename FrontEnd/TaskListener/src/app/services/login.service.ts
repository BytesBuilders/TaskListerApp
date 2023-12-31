import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "@auth0/auth0-angular";
import { map } from "rxjs/operators";
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })

export class LoginService{

  private userNameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  userName$: Observable<string> = this.userNameSubject.asObservable();

    userName: string = '';
    userToken: string = '';
    loginStatusInfo = false;

    constructor(public auth: AuthService, private router: Router){}

    setUserName(userName: string) {
      this.userNameSubject.next(userName);
    }

    IsLogged() {
        return this.auth.isAuthenticated$.pipe(
          map(isAuth => !!isAuth)
        );
      }

      checkLogin(): Observable<boolean> {
        return this.IsLogged().pipe(
          map(isAuthenticated => {
            if (isAuthenticated) {
              this.router.navigate(['/taskList']);
    
              this.auth.user$.subscribe(user => {
                this.userName = user?.name || 'NoNameAccess';
                console.log("Nombre Usuario:", this.userName);
              });
    
              return true;
            }
    
            this.userName = '';
            this.userToken = '';
            return false;
          })
        );
      }

      login(){
        this.auth.loginWithRedirect();
        this.loginStatusInfo = true;
      }

      logOut(){
        this.auth.logout()
        this.router.navigate(['/SignUp']);
        this.loginStatusInfo = false;
        this.userName = '';
        this.userToken = '';
      }

      getName(){
        return this.userNameSubject.value;
      }
}