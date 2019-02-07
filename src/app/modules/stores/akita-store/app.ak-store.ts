import { AppState, initAppState } from '../shared/state-models/app.state-model';
import { StoreConfig } from '@datorama/akita';
import { BaseAkStore } from './base.ak-store';
import { AppActionNames, GoToLoginPageAction, AppSuccessAction, AppFailedAction } from '../shared/actions/app.actions';
import { CommandDispatcher } from '@app/shared/interfaces/command-dispatcher.interface';
import { ModuleNameEnum } from '@app/shared/enums/module-name.enum';
import { Dictionary } from 'extension';

@StoreConfig({ name: ModuleNameEnum.App })
export class AppAkStore extends BaseAkStore<AppState> {
  constructor(
    dispatcher: CommandDispatcher
  ) {
    super( dispatcher, initAppState() );
    this.registerHandlers(this.getActionHandlers());
  }

  getActionHandlers(): Dictionary {
    const handlers = {};
    handlers[AppActionNames.GO_TO_LOGIN_PAGE] = (action) => this.gotoLoginPage(action);
    handlers[AppActionNames.ACTION_SUCCESS] = (action) => this.successFunction(action);
    handlers[AppActionNames.ACTION_FAILED] = (action) => this.failedFunction(action);
    return handlers;
  }

  gotoLoginPage(action: GoToLoginPageAction) {
    console.log(action);
  }

  successFunction(successAction: AppSuccessAction) {
    console.log(successAction);
  }

  failedFunction(successAction: AppFailedAction) {
    console.log(successAction);
  }
}
