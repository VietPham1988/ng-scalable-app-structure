import { UserQueries } from './user-queries.interface';
import { CommandDispatcher } from '@app/shared/interfaces/command-dispatcher.interface';
import { Injectable } from '@angular/core';
import { GetUsersAction } from '@app/modules/stores/shared/actions/user.actions';

@Injectable()
export class UserBizModel {
  public readonly users$ = this.queries.users$;
  constructor(
    private queries: UserQueries,
    private dispatcher: CommandDispatcher
  ) {}

  fetchAllUsers(): void {
    this.dispatcher.fire(new GetUsersAction());
  }
}
