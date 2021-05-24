import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const AppRoutes: Routes = [
  {
    path: 'admin',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, 
  { path: 'login', component: LoginComponent },
  
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }]
  }
  ,
  {
    path: '**',
    redirectTo: 'login'
  }
]
