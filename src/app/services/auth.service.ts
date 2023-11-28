import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 /* users: User[] = [{"username":"admin","password":"123","roles":['ADMIN']},
                  {"username":"rihab","password":"123","roles":['USER']} ];
 */
                  
  public loggedUser!:string;

  public isloggedIn: Boolean = false;
  public roles!:string[];
  apiURL: string = 'http://localhost:8081/users';
  token!:string|null;
  private helper = new JwtHelperService();

constructor(private router: Router,private http : HttpClient) { }
 

login(user : User)
{
return this.http.post<User>(this.apiURL+'/login', user , {observe:'response'});
}



saveToken(jwt:string){
  localStorage.setItem('jwt',jwt);
  this.token = jwt;
  this.isloggedIn = true;
  this.decodeJWT();
  }
  
  decodeJWT()
  { if (this.token == undefined)
   return;
  const decodedToken = this.helper.decodeToken(this.token);
  this.roles = decodedToken.roles;
  console.log("roles "+this.roles);
  this.loggedUser = decodedToken.sub;
  }


 loadToken() {
  this.token = localStorage.getItem('jwt');
  this.decodeJWT();
  }
  getToken():string| null {
  return this.token;
  }


logout() {
  this.isloggedIn= false;
  this.loggedUser = undefined!;
  this.roles = undefined!;
  this.token= undefined!;
  localStorage.removeItem('jwt');
  this.router.navigate(['/login']);
  }


  isTokenExpired(): Boolean
{
return this.helper.isTokenExpired(this.token); }

/*
 SignIn(user :User):Boolean{
      let validUser: Boolean = false;
      this.users.forEach((curUser) => {
      if(user.username== curUser.username && user.password==curUser.password) {
      validUser = true;
      this.loggedUser = curUser.username;
      this.isloggedIn = true;
      this.roles = curUser.roles;
      localStorage.setItem('loggedUser',this.loggedUser);
      localStorage.setItem('isloggedIn',String(this.isloggedIn));
      }
 });
      return validUser;
      }

  */
 isAdmin():Boolean{
        if (!this.roles) //this.roles== undefiened
        return false;
        return this.roles.indexOf('ADMIN') >=0;
  }

  setLoggedUserFromLocalStorage(login : string) {
        this.loggedUser = login; //user name  ye5o login de type string 
        this.isloggedIn = true; //on est connecté
     //   this.getUserRoles(login);// puisque fl locol storge maandich les roles ken users
    }



/*
    getUserRoles(username :string){ //creer les roles naatiwhom les users 
          this.users.forEach((curUser) => {// parcourir le tableau users pur recuupérer les roles des users
              if( curUser.username == username ) {
          this.roles = curUser.roles; // trouver les roles et les affecter au this.
          }
    });

  }
*/

}
