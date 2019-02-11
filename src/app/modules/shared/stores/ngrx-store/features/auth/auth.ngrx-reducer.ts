import { AuthState, initAuthState } from 'app/modules/shared/business-models/auth/auth.state-model';
import { AuthSuccessAction, AuthFailedAction, AuthActionNames, AuthActions } from 'app/modules/shared/business-models/auth';

// reducer
export function AuthNgrxReducer(authState: AuthState = initAuthState(), action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionNames.ACTION_SUCCESS:
      return actionSuccessReducer(authState, action as AuthSuccessAction);
    case AuthActionNames.ACTION_FAILED:
      return actionFailReducer(authState, action as AuthFailedAction);
    default:
      return authState;
  }
}

function actionSuccessReducer(authState: AuthState, action: AuthSuccessAction): AuthState {
  switch (action.subType) {
    default:
      return AuthState;
  }
}

function actionFailReducer(authState: AuthState, action: AuthFailedAction): AuthState {
  switch (action.subType) {
    default:
      return AuthState;
  }
}
