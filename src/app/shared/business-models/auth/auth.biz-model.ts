import { CommandDispatcher } from '@app/shared/interfaces/command-dispatcher.interface';
import { Injectable } from '@angular/core';
import { UserQueries } from '../user/user-queries.interface';
import { GetUsersAction } from '@app/modules/stores/shared/actions/user.actions';

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
