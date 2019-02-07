import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { AppSelectors } from './app.selectors';

@Injectable()
export class AppEffects {

  constructor(
    private actions$: Actions,
    private appSelectors: AppSelectors
  ) {}
}
