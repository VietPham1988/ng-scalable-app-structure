import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommandDispatcher } from '@app/modules/core/interfaces/command-dispatcher.interface';
import { RxDispatcher } from '@app/modules/core/stores/rxjs-store/rx.dispatcher';
import { AppRxStore } from '@app/modules/core/stores/rxjs-store/app.rx-store';
import { AppQueries } from '@app/modules/core/business-models/app/app-queries.interface';
import { AppRxQueries } from '@app/modules/core/stores/rxjs-store/app.rx-queries';

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
