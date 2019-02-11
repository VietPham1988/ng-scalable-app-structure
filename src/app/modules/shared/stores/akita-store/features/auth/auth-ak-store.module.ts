import { NgModule } from '@angular/core';
import { AuthQueries } from 'app/modules/shared/business-models/auth/auth-queries.interface';
import { AuthAkStore, AuthAkQueries } from 'app/modules/shared/stores/akita-store/features/auth';

@NgModule({
  imports: [],
  providers: [
    AuthAkStore,
    {
    provide: AuthQueries,
    useClass: AuthAkQueries
    }
  ]
})
export class AuthRxStoreModule {}
