import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { NgxsUserState } from './user.entity-state';
import { UserQueries } from '@app/shared/business-models/user/user-queries.interface';
import { UserSelectors } from './user.selectors';

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
