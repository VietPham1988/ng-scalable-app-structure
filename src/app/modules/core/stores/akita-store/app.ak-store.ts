import { StoreConfig } from '@datorama/akita';
import { BaseAkStore } from './base.ak-store';
import { Dictionary } from 'extension';
import { ModuleNameEnum } from 'app/modules/shared/enums/module-name.enum';
import { AppState, initAppState } from 'app/modules/core/business-models/app/app.state-model';
import { CommandDispatcher } from 'app/modules/core/interfaces/command-dispatcher.interface';
import { AppActionNames, GoToLoginPageAction, AppSuccessAction, AppFailedAction } from 'app/modules/core/business-models/app/app.actions';

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
