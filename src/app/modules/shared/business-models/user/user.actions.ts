import { Action, BaseSuccessAction, BaseFailedAction } from 'app/modules/shared/stores/action.interface';

export enum UserActionNames {
  GET_USERS = '[USER] Get Users',
  ACTION_SUCCESS = '[USER] Action Success',
  ACTION_FAILED = '[USER] Action Failed'
}

export class GetUsersAction extends Action {
  static readonly type = UserActionNames.GET_USERS;
  constructor() { super(); }
}

export class UserSuccessAction extends BaseSuccessAction {
  static readonly type = UserActionNames.ACTION_SUCCESS;
  constructor(public subType: string, public payload?: any) {
    super(subType, payload);
  }
}

export class UserFailedAction extends BaseFailedAction {
  static readonly type = UserActionNames.ACTION_FAILED;
  constructor(public subType: string, public payload?: any) {
    super(subType, payload);
  }
}

export type UserActions = GetUsersAction | UserSuccessAction | UserFailedAction;
