import { Injectable } from '@angular/core';
import { UserQueries } from '@app/modules/core/business-models/user/user-queries.interface';
import { CommandDispatcher } from '@app/modules/core/interfaces/command-dispatcher.interface';
import { GetUsersAction, UserActionNames } from '@app/modules/core/business-models/user/user.actions';
import { AutoUnsubscriber } from '@app/modules/shared/safe-unsubscriber';

@Injectable()
@AutoUnsubscriber()
export class UserBizModel {
  public readonly users$ = this.queries.users$;
  constructor(
    private queries: UserQueries,
    private dispatcher: CommandDispatcher
  ) {
    this.dispatcher.actionOfSubType$( UserActionNames.ACTION_SUCCESS, [UserActionNames.GET_USERS]).subscribe(
      a => console.log('UserBizModel ', a)
    );
  }

  fetchAllUsers(): void {
    this.dispatcher.fire(new GetUsersAction());
  }
}
