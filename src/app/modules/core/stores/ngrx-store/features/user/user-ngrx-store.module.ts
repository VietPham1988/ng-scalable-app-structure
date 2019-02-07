import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ModuleNameEnum } from '@app/modules/shared/enums/module-name.enum';
import { UserReducer } from '@app/modules/core/stores/ngrx-store/features/user/user.reducer';
import { UserEffects } from '@app/modules/core/stores/ngrx-store/features/user/user.effects';
import { UserQueries } from '@app/modules/core/business-models/user/user-queries.interface';
import { UserSelectors } from '@app/modules/core/stores/ngrx-store/features/user/user.selector';

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
