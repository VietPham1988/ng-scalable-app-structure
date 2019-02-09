import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAsyncService } from 'app/modules/core/async-services/user.async-service';
import { BaseHttpService } from 'app/modules/shared/services/base.http-service';
import { EnvService } from 'app/modules/core/environement-service/env.service';

@Injectable()
export class UserHttpService extends BaseHttpService implements UserAsyncService {
  private userUrlSegments: string;
  constructor(
    httpClient: HttpClient,
    envService: EnvService
  ) {
    super(httpClient, envService);
    this.userUrlSegments = 'users';
  }

  public getUsers() {
    return this.get(this.userUrlSegments);
  }

  public getUser(userId) {
    return this.get(`${this.userUrlSegments}/${userId}`);
  }

  public createUser(user: {id: number, amount: number, clientId: number, userId: number, description: string}) {
    return this.post(this.userUrlSegments, user);
  }

  public deleteUser(userId) {
    return this.delete(`${this.userUrlSegments}/${userId}`);
  }
  public updateUser(user: {id: number, amount: number, clientId: number, userId: number, description: string}){
    return this.put(`${this.userUrlSegments}/${user.id}`, user);
  }
}
