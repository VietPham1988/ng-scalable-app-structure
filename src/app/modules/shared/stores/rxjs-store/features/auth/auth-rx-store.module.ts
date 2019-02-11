import { NgModule } from '@angular/core';
import { AuthRxStore } from 'app/modules/shared/stores/rxjs-store/features/auth/auth.rx-store';
import { AuthRxQueries } from 'app/modules/shared/stores/rxjs-store/features/auth/auth.rx-queries';
import { AuthQueries } from 'app/modules/shared/business-models/auth/auth-queries.interface';

@NgModule({
  imports: [],
  providers: [
    AuthRxStore,
    {
      provide: AuthQueries,
      useClass: AuthRxQueries
    }
  ]
})
export class AuthRxStoreModule {}
