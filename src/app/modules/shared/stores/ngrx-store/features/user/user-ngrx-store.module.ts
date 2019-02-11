import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ModuleNameEnum } from 'app/modules/shared/enums/module-name.enum';
import { UserNgrxReducer } from 'app/modules/shared/stores/ngrx-store/features/user/user.ngrx-reducer';
import { UserNgrxEffects } from 'app/modules/shared/stores/ngrx-store/features/user/user.ngrx-effects';
import { UserQueries } from 'app/modules/shared/business-models/user/user-queries.interface';
import { UserNgrxSelectors } from 'app/modules/shared/stores/ngrx-store/features/user/user.ngrx-selector';

@NgModule({
  imports: [
    StoreModule.forFeature(ModuleNameEnum.User, UserNgrxReducer),
    EffectsModule.forFeature([UserNgrxEffects])
  ],
  providers: [{
    provide: UserQueries,
    useClass: UserNgrxSelectors
  }]
})
export class UserNgrxStoreModule {}
