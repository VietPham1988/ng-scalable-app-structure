import { Action, BaseSuccessAction, BaseFailedAction } from 'app/modules/shared/stores/action.interface';
import { LoginCredentials } from 'app/modules/shared/business-models/auth/login-credentials.model';

export enum AuthActionNames {
  LOGIN = '[AUTH] Login',
  ACTION_SUCCESS = '[AUTH] Action Success',
  ACTION_FAILED = '[AUTH] Action Failed'
}

export class LoginAction extends Action {
  static readonly type = AuthActionNames.LOGIN;
  constructor(public payload: LoginCredentials) { super(); }
}

export class AuthSuccessAction extends BaseSuccessAction {
  static readonly type = AuthActionNames.ACTION_SUCCESS;
  constructor(public subType: string, public payload?: any) {
    super(subType, payload);
  }
}

export class AuthFailedAction extends BaseFailedAction {
  static readonly type = AuthActionNames.ACTION_FAILED;
  constructor(public subType: string, public payload?: any) {
    super(subType, payload);
  }
}

export type AuthActions = LoginAction | AuthSuccessAction | AuthFailedAction;
