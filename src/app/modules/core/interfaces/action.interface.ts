export abstract class Action {
  type: string;
}

export const GetType = (action: Action): string => action.type || action.constructor['type'] ;
export const GetSubType = (action: Action): string => action['subType'] || action.constructor['subType'] ;

export abstract class BaseSuccessAction implements Action {
  type: string;
  constructor(public subType: string, public payload?: any) {}
}

export abstract class BaseFailedAction implements Action {
  type: string;
  constructor(public subType: string, public payload?: any) {}
}
