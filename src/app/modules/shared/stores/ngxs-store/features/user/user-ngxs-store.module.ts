import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { UserNgxsSelectors } from './user.ngxs-selectors';
import { UserNgxsState } from 'app/modules/shared/stores/ngxs-store/features/user/user.ngxs-state';
import { UserQueries } from 'app/modules/shared/business-models/user/user-queries.interface';

@NgModule({
  imports: [
    NgxsModule.forFeature([UserNgxsState])
  ],
  providers: [{
    provide: UserQueries,
    useClass: UserNgxsSelectors
  }]
})
export class UserNgxsStoreModule {}
