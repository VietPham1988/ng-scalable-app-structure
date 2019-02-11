import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AppNgxsState } from 'app/modules/shared/stores/ngxs-store/app.ngxs-state';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { NgxsDispatcher } from 'app/modules/shared/stores/ngxs-store/ngxs.dispatcher';
import { AppNgrxSelectors } from 'app/modules/shared/stores/ngrx-store/app.ngrx-selectors';
import { AppQueries } from 'app/modules/shared/business-models/app/app-queries.interface';

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
