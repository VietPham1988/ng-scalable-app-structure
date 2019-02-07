import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserBizModel } from '@app/modules/core/business-models/user/user.biz-model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Observable<[]>;
  constructor(private userBizModel: UserBizModel) {
  }

  ngOnInit() {
    this.users$ = this.userBizModel.users$ as Observable<[]>;
    this.userBizModel.fetchAllUsers();
  }

}
