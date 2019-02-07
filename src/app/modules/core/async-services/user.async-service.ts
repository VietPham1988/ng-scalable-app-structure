
export abstract class UserAsyncService {

  abstract getUsers(): any;

  abstract getUser(userId: string): any;

  abstract createUser(user: {id: number, amount: number, clientId: number, userId: number, description: string}): void;

  abstract deleteUser(userId: string): void;

  abstract updateUser(user: {id: number, amount: number, clientId: number, userId: number, description: string}): void;
}
