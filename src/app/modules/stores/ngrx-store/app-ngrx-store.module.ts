import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CommandDispatcher } from '@app/shared/interfaces/command-dispatcher.interface';
import { AppSelectors } from './app.selectors';
import { NgrxDispatcher } from './ngrx.dispatcher';
import { AppQueries } from '@app/shared/business-models/app/app-queries.interface';

@NgModule({
  imports: [
    StoreModule.forRoot({
      app: AppReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10 //  Buffers the last 10 states
    }),
    EffectsModule.forRoot([AppEffects])
  ],
  exports: [
    StoreModule,
    StoreDevtoolsModule,
    EffectsModule
  ]
})
export class AppNgrxStoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppNgrxStoreModule,
      providers: [
        {
          provide: CommandDispatcher,
          useClass: NgrxDispatcher
        },
        AppSelectors,
        {
          provide: AppQueries,
          useExisting: AppSelectors,
        }
      ]
    };
  }
}
