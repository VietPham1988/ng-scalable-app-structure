export abstract class Action {
  type: string;
}

export const getType = (action: Action) => action.type || action.constructor['type'] ;

export abstract class BaseSuccessAction implements Action {
  type: string;
  constructor(public subType: string, public payload?: any) {}
}

export abstract class BaseFailedAction implements Action {
  type: string;
  constructor(public subType: string, public payload?: any) {}
}
