import { NgModule } from '@angular/core';
import { UserQueries } from 'app/modules/shared/business-models/user/user-queries.interface';
import { UserRxStore } from 'app/modules/shared/stores/rxjs-store/features/user/user.rx-store';
import { UserRxQueries } from 'app/modules/shared/stores/rxjs-store/features/user/user.rx-queries';

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
