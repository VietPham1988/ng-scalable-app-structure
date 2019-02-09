import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AppNgxsState } from 'app/modules/core/stores/ngxs-store/app.ngxs-state';
import { CommandDispatcher } from 'app/modules/core/interfaces/command-dispatcher.interface';
import { NgxsDispatcher } from 'app/modules/core/stores/ngxs-store/ngxs.dispatcher';
import { AppNgrxSelectors } from 'app/modules/core/stores/ngrx-store/app.ngrx-selectors';
import { AppQueries } from 'app/modules/core/business-models/app/app-queries.interface';

@NgModule({
  imports: [
    NgxsModule.forRoot([AppNgxsState])
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
        AppNgrxSelectors,
        {
          provide: AppQueries,
          useExisting: AppNgrxSelectors,
        }
      ]
    };
  }
}
