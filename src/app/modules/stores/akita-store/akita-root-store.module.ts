import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { CommandDispatcher } from '@app/shared/interfaces/command-dispatcher.interface';
import { NgrxDispatcher } from '../ngrx-store/ngrx.dispatcher';
import { AppAkStore } from './app.ak-store';
import { AppQueries } from '@app/shared/business-models/app/app-queries.interface';
import { AkDispatcher } from './akita.dispatcher';

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
