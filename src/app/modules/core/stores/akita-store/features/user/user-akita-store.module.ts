import { NgModule } from '@angular/core';
import { UserQueries } from '@app/modules/core/business-models/user';
import { UserAkStore, UserAkQueries } from '@app/modules/core/stores/akita-store/features/user';

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
