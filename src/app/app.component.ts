import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MesExcursions';

  constructor (public authService: AuthService) {}
/*onLogout()
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


}

