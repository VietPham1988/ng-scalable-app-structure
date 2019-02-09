import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AppNgrxReducer } from 'app/modules/core/stores/ngrx-store/app.ngrx-reducers';
import { AppNgrxEffects } from 'app/modules/core/stores/ngrx-store/app.ngrx-effects';
import { CommandDispatcher } from 'app/modules/core/interfaces/command-dispatcher.interface';
import { NgrxDispatcher } from 'app/modules/core/stores/ngrx-store/ngrx.dispatcher';
import { AppNgrxSelectors } from 'app/modules/core/stores/ngrx-store/app.ngrx-selectors';
import { AppQueries } from 'app/modules/core/business-models/app/app-queries.interface';

@NgModule({
  imports: [
    StoreModule.forRoot({
      app: AppNgrxReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10 //  Buffers the last 10 states
    }),
    EffectsModule.forRoot([AppNgrxEffects])
  ],
  exports: [
    StoreModule,
    StoreDevtoolsModule,
    EffectsModule
  ]
})
export class NgrxRootStoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgrxRootStoreModule,
      providers: [
        {
          provide: CommandDispatcher,
          useClass: NgrxDispatcher
        },
        AppNgrxSelectors,
        {
          provide: AppQueries,
          useExisting: AppNgrxSelectors,
        }
      ]
    };
  }
}
