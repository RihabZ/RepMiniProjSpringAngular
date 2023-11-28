import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MesExcursions';

  constructor (public authService: AuthService, private router: Router) {}
/*
{
  logout()
  {
this.isLoggedIn=false;
this.onLoggedUser= undefined!;
this.roles=undefined;
localStorage.removeItem('loggedUser');
localStorage.setItem('isLoggedUser',String(this.isLoggedIn));
  this.router.navigate(['/loggin']);
}
  */

ngOnInit () {// 2 variables locales avec let 
  let isloggedin: string | null;;
  let loggedUser:string | null;;

  this.authService.loadToken();
if (this.authService.getToken()==null ||
 this.authService.isTokenExpired())
this.router.navigate(['/login']);
 
}
  onLogout()
  {
    this.authService.logout();
  }


}

