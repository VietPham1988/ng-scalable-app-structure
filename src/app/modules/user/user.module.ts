import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent, UserDetailComponent, NewUserComponent } from 'app/modules/user/pages';
import { UserRouting } from 'app/modules/user/user.routing';
import { UserRxStoreModule } from 'app/modules/shared/stores/rxjs-store/features/user';
import { UserAsyncService } from 'app/modules/shared/business-models/user/user.async-service';
import { UserHttpService } from 'app/modules/shared/http-services/user.http-service';

@NgModule({
  imports: [
    CommonModule,
    UserRouting,
    // UserNgrxStoreModule
    // UserNgxsStoreModule
    // UserAkitaStoreModule
    UserRxStoreModule
  ],
  declarations: [
    UsersComponent,
    UserDetailComponent,
    NewUserComponent
  ],
  providers: [
    {
      provide: UserAsyncService,
      useClass: UserHttpService
    }
  ],
})
export class UserModule { }
