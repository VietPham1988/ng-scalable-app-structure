import { NgModule } from '@angular/core';
import { UserQueries } from '@app/shared/business-models/user/user-queries.interface';
import { UserAkQueries } from './user.ak-queries';
import { UserAkStore } from './user.ak-store';

@NgModule({
  imports: [],
  providers: [
    UserAkStore,
    {
    provide: UserQueries,
    useClass: UserAkQueries
    }
  ]
})
export class UserAkitaStoreModule {}
