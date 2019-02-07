import { RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';

const UserRoutes = [
  {
    path: '', component: UsersComponent,
  },
  {
    path: ':id', component: UserDetailComponent
  }
];

export const UserRouting = RouterModule.forChild(UserRoutes);
