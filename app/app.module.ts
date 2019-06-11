import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRouterModule } from './app.router.module';

import { AuthService } from './_services/auth';
import { AppComponent } from './app.component';

import { LoadingComponent } from './components/loading/loading.component';
import { LoadingService } from './components/loading/loading.service';

import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { AuthInterceptor } from './_interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule
  ],
  providers: [
    AuthService,
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
