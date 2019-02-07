import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dictionary } from 'extension';
import { AppState, initAppState } from '@app/modules/core/business-models/app/app.state-model';
import { CommandDispatcher } from '@app/modules/core/interfaces/command-dispatcher.interface';
import { AppActionNames, GoToLoginPageAction, AppSuccessAction, AppFailedAction } from '@app/modules/core/business-models/app/app.actions';
import { BaseRxStore } from '@app/modules/core/stores/rxjs-store/base.rx-store';

@Injectable()
export class AppRxStore extends BaseRxStore<AppState> {
  constructor( dispatcher: CommandDispatcher ) {
    super(dispatcher, initAppState());
  }

  public get token$(): Observable<string> {
    return this.state$.pipe( map( state => state.token) );
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
