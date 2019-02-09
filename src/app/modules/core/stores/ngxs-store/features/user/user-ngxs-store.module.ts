import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { UserNgxsSelectors } from './user.ngxs-selectors';
import { UserNgxsState } from 'app/modules/core/stores/ngxs-store/features/user/user.ngxs-state';
import { UserQueries } from 'app/modules/core/business-models/user/user-queries.interface';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([UserNgxsState])
  ],
  providers: [{
    provide: UserQueries,
    useClass: UserNgxsSelectors
  }]
})
export class UserNgxsStoreModule {}
