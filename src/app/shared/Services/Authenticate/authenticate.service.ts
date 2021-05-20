import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../../src/environments/environment';
import { ForgotPassword } from '../../Models/ForgotPassword';
import { ResetPasswordDTO } from '../../Models/ResetPasswordDTO';
import { User } from '../../Models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  email: string;
  password: string;
  user: User;
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json',
    "Authorization": "bearer " + localStorage.getItem('token')
      })};
  constructor(private httpClient : HttpClient,private router : Router) { }
  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};
  public forgotPassword = (route: string, body: ForgotPassword) => {
    return this.httpClient.post(this.createCompleteRoute(route,environment.urlAddress), body);
  }
  public resetPassword = (route: string, body: ResetPasswordDTO) => {
    return this.httpClient.post(this.createCompleteRoute(route, environment.urlAddress), body);
  }



  login(email:string,password:string){
    this.email=email;
    this.password=password
    let Data = { email, password }
    return this.httpClient.post(`${environment.Domain}api/authenticate/login`, Data, this.httpHeader)
  }
  logout()
  {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  changPassword(NewPassword: string) {
    var Oldpass=localStorage.getItem("OldPassword")

    var data = {
      userName: localStorage.getItem('userName'),
      
      // email:localStorage.getItem("email"),
      password: Oldpass,
      Newpassword: NewPassword
    };
    return this.httpClient.post(`${environment.Domain}Authenticate/changPassword`, data, this.httpOptions)
  }
  checkInterceptor()
  {
    return this.httpClient.get(`${environment.Domain}Authenticate/checkInterceptor`,this.httpOptions)
  }
}
