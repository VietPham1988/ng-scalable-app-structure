import { AppState, initAppState } from 'app/modules/shared/business-models/app/app.state-model';
import { AppActions, AppActionNames, AppSuccessAction, AppFailedAction } from 'app/modules/shared/business-models/app/app.actions';


// reducer
export function AppNgrxReducer(appState: AppState = initAppState(), action: AppActions): AppState {
  switch (action.type) {
    // case AppActionNames.GO_TO_LOGIN_PAGE:
    //   const gotoAction = action as GoToLoginPageAction;
    //   return {
    //     ...appState,
    //     token: gotoAction.payload as string
    //   };
    case AppActionNames.ACTION_SUCCESS:
      return actionSuccessReducer(appState, action as AppSuccessAction);
    case AppActionNames.ACTION_FAILED:
      return actionFailReducer(appState, action as AppFailedAction);
    default:
      return appState;
  }
}

function actionSuccessReducer(appState: AppState, action: AppSuccessAction): AppState {
  switch (action.subType) {
    default:
      return appState;
  }
}

function actionFailReducer(appState: AppState, action: AppFailedAction): AppState {
  switch (action.subType) {
    default:
      return appState;
  }
}
