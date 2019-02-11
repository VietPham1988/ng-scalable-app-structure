import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { AppNgrxSelectors } from './app.ngrx-selectors';

@Injectable()
export class AppNgrxEffects {

  constructor(
    private actions$: Actions,
    private appSelectors: AppNgrxSelectors
  ) {}
}
