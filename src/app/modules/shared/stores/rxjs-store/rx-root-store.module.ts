import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { RxDispatcher } from 'app/modules/shared/stores/rxjs-store/rx.dispatcher';
import { AppRxStore } from 'app/modules/shared/stores/rxjs-store/app.rx-store';
import { AppQueries } from 'app/modules/shared/business-models/app/app-queries.interface';
import { AppRxQueries } from 'app/modules/shared/stores/rxjs-store/app.rx-queries';

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
          useClass: AppRxQueries,
        }
      ]
    };
  }
}
