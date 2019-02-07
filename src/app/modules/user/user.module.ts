import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBizModel } from '@app/modules/core/business-models/user';
import { UsersComponent, UserDetailComponent, NewUserComponent } from '@app/modules/user/pages';
import { UserRouting } from '@app/modules/user/user.routing';
import { UserRxStoreModule } from '@app/modules/core/stores/rxjs-store/features/user';

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
