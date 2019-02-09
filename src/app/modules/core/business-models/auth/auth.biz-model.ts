import { Injectable } from '@angular/core';
import { UserQueries } from 'app/modules/core/business-models/user/user-queries.interface';
import { GetUsersAction } from 'app/modules/core/business-models/user/user.actions';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';

@Injectable()
export class UsersBizModel {
  public readonly users$ = this.queries.users$;
  constructor(
    private queries: UserQueries,
    private dispatcher: CommandDispatcher
  ) {}

  fetchAllUsers(): void {
    this.dispatcher.fire(new GetUsersAction());
  }
}
