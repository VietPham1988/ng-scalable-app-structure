import { NgModule } from '@angular/core';
import { UserQueries } from 'app/modules/core/business-models/user/user-queries.interface';
import { UserRxStore } from 'app/modules/core/stores/rxjs-store/features/user/user.rx-store';
import { UserRxQueries } from 'app/modules/core/stores/rxjs-store/features/user/user.rx-queries';

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
