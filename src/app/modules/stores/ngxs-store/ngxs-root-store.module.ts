import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsAppState } from './app.entity-state';
import { CommandDispatcher } from '@app/shared/interfaces/command-dispatcher.interface';
import { NgxsDispatcher } from './ngxs.dispatcher';
import { AppSelectors } from './app.selectors';
import { AppQueries } from '@app/shared/business-models/app/app-queries.interface';

@NgModule({
  imports: [
    NgxsModule.forRoot([NgxsAppState])
  ],
  exports: [
    NgxsModule
  ]
})
export class NgxsRootStoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxsRootStoreModule,
      providers: [{
          provide: CommandDispatcher,
          useClass: NgxsDispatcher
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
