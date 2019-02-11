import { Routes } from '@angular/router';
import { Error4Component } from './modules/error/error4/error4.component';

export const AppRoutes: Routes = [
  {
    // default routes
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'users',
    loadChildren: './modules/user/user.module#UserModule'
  },
  {
    path: 'auth',
    loadChildren: './modules/auth/auth.module#AuthModule'
  },
  // {
  //   path: 'error/404',
  //   component: Error4Component,
  // },
  // {
  //   path: '**',
  //   redirectTo: 'error/404',
  // }
];

