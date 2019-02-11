import { NgModule } from '@angular/core';
import { AuthQueries } from 'app/modules/shared/business-models/auth';
import { NgxsModule } from '@ngxs/store';
import { AuthNgxsState } from 'app/modules/shared/stores/ngxs-store/features/auth/auth.ngxs-state';
import { AuthNgxsSelectors } from 'app/modules/shared/stores/ngxs-store/features/auth';

@NgModule({
  imports: [
    NgxsModule.forFeature([AuthNgxsState])
  ],
  providers: [{
    provide: AuthQueries,
    useClass: AuthNgxsSelectors
  }]
})
export class AuthNgxsStoreModule {}
