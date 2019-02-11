import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserActionNames, UserSuccessAction, UserFailedAction } from 'app/modules/shared/business-models/user/user.actions';
import { UserAsyncService } from 'app/modules/shared/business-models/user/user.async-service';

@Injectable()
export class UserNgrxEffects {

  @Effect()
  getAllUsers = this.actions$.pipe(
    ofType(UserActionNames.GET_USERS),
    switchMap( () =>
      this.userService.getUsers().pipe(
        map( users => new UserSuccessAction( UserActionNames.GET_USERS, users)),
        catchError( err => of( new UserFailedAction(UserActionNames.GET_USERS, err)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserAsyncService
  ) {}
}
