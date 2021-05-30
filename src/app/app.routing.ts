import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',component:LoginComponent
  },
  // {
  //   path: 'admin',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // }, 
  { path: 'login', component: LoginComponent },
  { path: 'Resetpassword', component: ResetPasswordComponent },
{ path: 'Forgotpassword', component: ForgotPasswordComponent },
  
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }]
  }
  // ,
  // {
  //   path: '**',
  //   redirectTo: 'login'
  // }
]
