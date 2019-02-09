import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { CommandDispatcher } from 'app/modules/core/interfaces/command-dispatcher.interface';
import { AkDispatcher } from 'app/modules/core/stores/akita-store/akita.dispatcher';
import { AppAkStore } from 'app/modules/core/stores/akita-store/app.ak-store';
import { AppQueries } from 'app/modules/core/business-models/app/app-queries.interface';

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
