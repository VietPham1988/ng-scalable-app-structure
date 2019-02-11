import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRouting } from 'app/modules/auth/auth.routing';
import { AuthRxStoreModule } from 'app/modules/shared/stores/rxjs-store/features/auth';
import { AuthAsyncService } from 'app/modules/shared/business-models/auth';
import { AuthHttpService } from 'app/modules/shared/http-services/auth.http-service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRouting,
    // AuthNgrxStoreModule
    // AuthNgxsStoreModule
    // AuthAkitaStoreModule
    AuthRxStoreModule
  ],
  providers: [
    {
      provide: AuthAsyncService,
      useClass: AuthHttpService
    }
  ],
})
export class AuthModule { }
