import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { UserBizModel } from 'app/modules/shared/business-models/user/user.biz-model';
import { Unsubscriber } from 'app/modules/shared/safe-unsubscriber/unsubscriber';
import { AutoUnsubscriber } from 'app/modules/shared/safe-unsubscriber';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [
    UserBizModel,
    Unsubscriber
  ]
})
@AutoUnsubscriber()
export class UsersComponent implements OnInit {
  users$: Observable<[]>;
  users: [];
  constructor(
    private userBizModel: UserBizModel,
    private unsubscriber: Unsubscriber
  ) { }

  ngOnInit() {
    this.users$ = this.userBizModel.users$ as Observable<[]>;
    this.unsubscriber.safeSubscription(
      this.userBizModel.users$.subscribe( u => this.users = u)
    );
    this.userBizModel.fetchAllUsers();
  }
}
