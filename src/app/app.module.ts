import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './shared/services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppRoutes } from './app.routing';
import { FormsModule } from '@angular/forms';
import { ErrorModule } from './modules/error/error.module';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { NgxsRootStoreModule } from './modules/stores/ngxs-store/ngxs-root-store.module';
import { AppNgrxStoreModule } from './modules/stores/ngrx-store/app-ngrx-store.module';
import { AkitaRootStoreModule } from './modules/stores/akita-store/akita-root-store.module';
import { RxRootStoreModule } from './modules/stores/rxjs-store/rx-root-store.module';

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
  bootstrap: [AppComponent]
})
export class AppModule {}
