import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ModuleNameEnum } from 'app/modules/shared/enums/module-name.enum';
import { AuthQueries } from 'app/modules/shared/business-models/auth';
import { AuthNgrxSelectors } from 'app/modules/shared/stores/ngrx-store/features/auth/auth.ngrx-selector';
import { AuthNgrxReducer } from 'app/modules/shared/stores/ngrx-store/features/auth/auth.ngrx-reducer';
import { AuthNgrxEffects } from 'app/modules/shared/stores/ngrx-store/features/auth/auth.ngrx-effects';

@NgModule({
  imports: [
    StoreModule.forFeature(ModuleNameEnum.Auth, AuthNgrxReducer),
    EffectsModule.forFeature([AuthNgrxEffects])
  ],
  providers: [{
    provide: AuthQueries,
    useClass: AuthNgrxSelectors
  }]
})
export class AuthNgrxStoreModule {}
