import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AuthAsyncService } from 'app/modules/shared/business-models/auth';
import {
  AuthActionNames,
  AuthSuccessAction,
  AuthFailedAction,
  LoginAction
} from 'app/modules/shared/business-models/auth/auth.actions';

@Injectable()
export class AuthNgrxEffects {

  @Effect()
  login = this.actions$.pipe(
    ofType(AuthActionNames.LOGIN),
    switchMap( (action: LoginAction) =>
      this.authService.login(action.payload).pipe(
        map( users => new AuthSuccessAction( AuthActionNames.LOGIN, users)),
        catchError( err => of( new AuthFailedAction(AuthActionNames.LOGIN, err)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthAsyncService
  ) {}
}
