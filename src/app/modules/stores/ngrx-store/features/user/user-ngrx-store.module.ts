import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserReducer } from './user.reducer';
import { UserEffects } from './user.effects';
import { ModuleNameEnum } from '@app/shared/enums/module-name.enum';
import { UserSelectors } from './user.selector';
import { UserQueries } from '@app/shared/business-models/user/user-queries.interface';

@NgModule({
  imports: [
    StoreModule.forFeature(ModuleNameEnum.User, UserReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [{
    provide: UserQueries,
    useClass: UserSelectors
  }]
})
export class UserNgrxStoreModule {}
