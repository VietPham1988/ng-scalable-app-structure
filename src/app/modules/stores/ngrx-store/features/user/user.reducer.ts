import { UserState, initUserState } from '@app/modules/stores/shared/state-models/user.state-model';
import { UserActions, UserActionNames, UserSuccessAction, UserFailedAction } from '@app/modules/stores/shared/actions/user.actions';

// reducer
export function UserReducer(userState: UserState = initUserState(), action: UserActions): UserState {
  switch (action.type) {
    case UserActionNames.ACTION_SUCCESS:
      return actionSuccessReducer(userState, action as UserSuccessAction);
    case UserActionNames.ACTION_FAILED:
      return actionFailReducer(userState, action as UserFailedAction);
    default:
      return userState;
  }
}

function actionSuccessReducer(userState: UserState, action: UserSuccessAction): UserState {
  switch (action.subType) {
    case UserActionNames.GET_USERS:
      return {
        ...userState,
        users: action.payload
      };
    default:
      return userState;
  }
}

function actionFailReducer(userState: UserState, action: UserFailedAction): UserState {
  switch (action.subType) {
    default:
      return userState;
  }
}
