import { RouterModule } from '@angular/router';
import { LoginComponent } from 'app/modules/auth/pages/login/login.component';

const AuthRoutes = [
  {
    path: '', component: LoginComponent,
  }
];

export const AuthRouting = RouterModule.forChild(AuthRoutes);
