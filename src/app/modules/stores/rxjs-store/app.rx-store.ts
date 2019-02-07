import { AppState, initAppState } from '../shared/state-models/app.state-model';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommandDispatcher } from '@app/shared/interfaces/command-dispatcher.interface';
import { BaseRxStore } from './base.rx-store';
import { Dictionary } from 'extension';
import { AppActionNames, GoToLoginPageAction, AppSuccessAction, AppFailedAction } from '../shared/actions/app.actions';

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
