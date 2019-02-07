import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommandDispatcher } from '@app/shared/interfaces/command-dispatcher.interface';
import { RxDispatcher } from './rx.dispatcher';
import { AppQueries } from '@app/shared/business-models/app/app-queries.interface';
import { AppRxQueries } from './app.rx-queries';
import { AppRxStore } from './app.rx-store';

@NgModule()
export class RxRootStoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RxRootStoreModule,
      providers: [
        {
          provide: CommandDispatcher,
          useClass: RxDispatcher
        },
        AppRxStore,
        {
          provide: AppQueries,
          useExisting: AppRxQueries,
        }
      ]
    };
  }
}
