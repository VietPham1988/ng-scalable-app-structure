import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { UserSelectors } from './user.selectors';
import { NgxsUserState } from '@app/modules/core/stores/ngxs-store/features/user/user.entity-state';
import { UserQueries } from '@app/modules/core/business-models/user/user-queries.interface';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([NgxsUserState])
  ],
  providers: [{
    provide: UserQueries,
    useClass: UserSelectors
  }]
})
export class UserNgxsStoreModule {}
