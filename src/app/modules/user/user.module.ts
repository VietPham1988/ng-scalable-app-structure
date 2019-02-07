import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/users/users.component';
import { UserBizModel } from '@app/shared/business-models/user/user.biz-model';
import { UserRouting } from './user.routing';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { UserNgrxStoreModule } from '../stores/ngrx-store/features/user/user-ngrx-store.module';
import { UserNgxsStoreModule } from '../stores/ngxs-store/features/user/user-ngxs-store.module';
import { UserAkitaStoreModule } from '../stores/akita-store/features/home/user-akita-store.module';
import { UserRxStoreModule } from '../stores/rxjs-store/features/home/user-rx-store.module';

@NgModule({
  imports: [
    CommonModule,
    UserRouting,
    // UserNgrxStoreModule
    // UserNgxsStoreModule
    // UserAkitaStoreModule
    UserRxStoreModule
  ],
  providers: [
    UserBizModel
  ],
  declarations: [
    UsersComponent,
    UserDetailComponent,
    NewUserComponent
  ]
})
export class UserModule { }
