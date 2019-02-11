import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAsyncService } from 'app/modules/shared/business-models/user/user.async-service';
import { BaseHttpService } from 'app/modules/shared/http-services/base.http-service';
import { EnvService } from 'app/modules/shared/environement-service/env.service';
import { User } from 'app/modules/shared/business-models/user/user.model';

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

  public createUser(user: User) {
    return this.post(this.userUrlSegments, user);
  }

  public deleteUser(userId) {
    return this.delete(`${this.userUrlSegments}/${userId}`);
  }
  public updateUser(user: Partial<User>){
    return this.put(`${this.userUrlSegments}/${user.id}`, user);
  }
}
