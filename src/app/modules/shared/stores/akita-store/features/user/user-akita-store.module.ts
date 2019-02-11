import { NgModule } from '@angular/core';
import { UserQueries } from 'app/modules/shared/business-models/user';
import { UserAkStore, UserAkQueries } from 'app/modules/shared/stores/akita-store/features/user';

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
