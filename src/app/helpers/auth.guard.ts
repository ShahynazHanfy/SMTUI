import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthenticateService } from 'app/Shared/Services/Authenticate/authenticate.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor(private authService: AuthenticateService,private router : Router)
  {}
   canActivate():boolean
   {
     if(this.authService.IsAdmin())
     {
       return true;
     }
     else
     {
      window.alert('Access Denied, Login is Required to Access This Page!')
      this.router.navigate(['/login']);
       return false;
     }
   }
}
