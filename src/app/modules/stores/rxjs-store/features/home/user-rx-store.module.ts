import { NgModule } from '@angular/core';
import { UserQueries } from '@app/shared/business-models/user/user-queries.interface';
import { UserRxStore } from './user.rx-store';
import { UserRxQueries } from './user.rx-queries';

@NgModule({
  imports: [],
  providers: [
    UserRxStore,
    {
      provide: UserQueries,
      useClass: UserRxQueries
    }
  ]
})
export class UserRxStoreModule {}
