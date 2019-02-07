import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UserService } from '@app/shared/services/user.service';
import { of } from 'rxjs';
import { UserActionNames, UserSuccessAction, UserFailedAction } from '@app/modules/stores/shared/actions/user.actions';

@Injectable()
export class UserEffects {

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
    private userService: UserService
  ) {}
}
