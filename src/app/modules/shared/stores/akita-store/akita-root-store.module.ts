import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkDispatcher } from 'app/modules/shared/stores/akita-store/akita.dispatcher';
import { AppAkStore } from 'app/modules/shared/stores/akita-store/app.ak-store';
import { AppQueries } from 'app/modules/shared/business-models/app/app-queries.interface';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';

@NgModule({
  imports: [
    CommonModule,
    AkitaNgDevtools.forRoot()
  ]
})
export class AkitaRootStoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AkitaRootStoreModule,
      providers: [
        {
          provide: CommandDispatcher,
          useClass: AkDispatcher
        },
        AppAkStore,
        {
          provide: AppQueries,
          useExisting: AppAkStore,
        }
      ]
    };
  }
}
