import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringUtility } from 'app/modules/shared/utilities';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        StringUtility
      ]
    };
  }
}
