import { User } from 'app/modules/shared/business-models/user/user.model';

export abstract class UserAsyncService {

  abstract getUsers(): any;

  abstract getUser(userId: string): any;

  abstract createUser(user: User): void;

  abstract deleteUser(userId: string): void;

  abstract updateUser(user: Partial<User>): void;
}
