import { Action, BaseSuccessAction, BaseFailedAction } from 'app/modules/shared/stores/action.interface';

export enum AppActionNames {
  GO_TO_LOGIN_PAGE  = '[APP] Go To Login Page',
  SAVE_JWT          = '[APP] Save JWT',
  ACTION_SUCCESS    = '[APP] Action Success',
  ACTION_FAILED     = '[APP] Action Failed'
}

export class SaveJwtAction extends Action {
  static readonly type = AppActionNames.SAVE_JWT;
  constructor(public payload: string) { super(); }
}

export class AppSuccessAction extends BaseSuccessAction {
  static readonly type = AppActionNames.ACTION_SUCCESS;
  constructor(public subType: string, public payload?: any) {
    super(subType, payload);
  }
}

export class AppFailedAction extends BaseFailedAction {
  static readonly type = AppActionNames.ACTION_FAILED;
  constructor(public subType: string, public payload?: any) {
    super(subType, payload);
  }
}

export type AppActions = SaveJwtAction | AppSuccessAction | AppFailedAction;
