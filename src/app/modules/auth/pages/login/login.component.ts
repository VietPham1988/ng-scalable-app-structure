import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginCredentials, AuthBizModel } from 'app/modules/shared/business-models/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    AuthBizModel
  ]
})
export class LoginComponent implements OnInit {
  loginFrm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public readonly authBizModel: AuthBizModel
  ) { }

  ngOnInit() {
    this.loginFrm = this.initialForm();
  }

  initialForm(loginCreds?: LoginCredentials) {
    if (!loginCreds) loginCreds = new LoginCredentials('', '');
    return this.formBuilder.group({
      username: [loginCreds.username, [Validators.required]],
      password: [loginCreds.password, [Validators.required]]
    });
  }

  onSubmit() {
    const loginCreds = this.loginFrm.value as LoginCredentials;
    this.authBizModel.login(loginCreds);
  }

}
