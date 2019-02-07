import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { UserAsyncService } from '@app/modules/core/async-services/user.async-service';

@Injectable()
export class UserHttpService extends BaseService implements UserAsyncService {
  private userUrl: string;
  constructor(private httpClient: HttpClient) {
    super();
    this.userUrl = this.ServerUrl + 'users';
  }

  public getUsers() {
    return this.httpClient.get(this.userUrl);
  }

  public getUser(userId) {
    return this.httpClient.get(`${this.userUrl}/${userId}`);
  }

  public createUser(user: {id: number, amount: number, clientId: number, userId: number, description: string}) {
    return this.httpClient.post(this.userUrl, user);
  }

  public deleteUser(userId) {
    return this.httpClient.delete(`${this.userUrl}/${userId}`);
  }
  public updateUser(user: {id: number, amount: number, clientId: number, userId: number, description: string}){
    return this.httpClient.put(`${this.userUrl}/${user.id}`, user);
  }
}
