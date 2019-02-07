import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsAppState } from '@app/modules/core/stores/ngxs-store/app.entity-state';
import { CommandDispatcher } from '@app/modules/core/interfaces/command-dispatcher.interface';
import { NgxsDispatcher } from '@app/modules/core/stores/ngxs-store/ngxs.dispatcher';
import { AppSelectors } from '@app/modules/core/stores/ngrx-store/app.selectors';
import { AppQueries } from '@app/modules/core/business-models/app/app-queries.interface';

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
