import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ErrorModule } from 'app/modules/error/error.module';
import { AppRoutes } from 'app/app.routing';
import { DataService } from 'app/modules/shared/services/data.service';
import { RxRootStoreModule } from 'app/modules/core/stores/rxjs-store';
import { AppComponent } from 'app/components/app/app.component';
import { HomeComponent } from 'app/components/home/home.component';
import { UserAsyncService } from 'app/modules/core/async-services/user.async-service';
import { UserHttpService } from 'app/modules/shared/services/user.http-service';
import { EnvServiceProvider } from 'app/modules/core/environement-service/env.provider';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes, {
      preloadingStrategy: PreloadAllModules
    }),
    InMemoryWebApiModule.forRoot(DataService),
    ErrorModule,
    // AppNgrxStoreModule.forRoot()
    // AppNgxsStoreModule.forRoot()
    // AppAkitaStoreModule.forRoot()
    RxRootStoreModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [
    EnvServiceProvider,
    {
      provide: UserAsyncService,
      useClass: UserHttpService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
