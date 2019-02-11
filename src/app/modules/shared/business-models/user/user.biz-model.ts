import { Injectable } from '@angular/core';
import { UserQueries } from 'app/modules/shared/business-models/user/user-queries.interface';
import { GetUsersAction, UserActionNames } from 'app/modules/shared/business-models/user/user.actions';
import { AutoUnsubscriber } from 'app/modules/shared/safe-unsubscriber';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';

@Injectable()
@AutoUnsubscriber()
export class UserBizModel {
  public readonly users$ = this.queries.users$;
  constructor(
    private queries: UserQueries,
    private dispatcher: CommandDispatcher
  ) {
    // this.dispatcher.actionOfSubType$( UserActionNames.ACTION_SUCCESS, [UserActionNames.GET_USERS]).subscribe(
    //   a => console.log('UserBizModel ', a)
    // );
  }

  fetchAllUsers(): void {
    this.dispatcher.fire(new GetUsersAction());
  }
}
