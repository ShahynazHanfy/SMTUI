import { Component, OnInit } from '@angular/core';
import { Authenticate } from "../../Shared/Models/Authenticate";
import { AuthenticateService } from "../../Shared/Services/Authenticate/authenticate.service";
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userId: string
  email: string = ''
  password: string = ''
  constructor(private authService: AuthenticateService, private route: Router) { }

  ngOnInit(): void {

  }
  login() {
    console.log("mail", this.email)
    this.authService.login(this.email, this.password).subscribe(res => {
      console.log("Thank you",res)
      localStorage.setItem("userName", res["userName"])
      localStorage.setItem("token", res["token"])
      localStorage.setItem("roles", res["roles"])

      localStorage.setItem("empId", res["empId"])
      localStorage.setItem("userId", res["userId"])
      this.route.navigate(['/admin']);

    })
    // return false
  }

  public onKeyMail(event: any) {
    this.email = event.target.value
  }
  public onKeyPass(event: any) {
    this.password = event.target.value
  }
  clickBtn(){
    this.route.navigate(['/Forgotpassword']);

  }
}
