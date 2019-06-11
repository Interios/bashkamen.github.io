import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AuthRouterModule } from './auth.router.module';

import { AuthService } from 'src/app/_services/auth/';

import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { SessionService } from 'src/app/_services/session';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,   
        FormsModule,
        ReactiveFormsModule,
        AngularSvgIconModule,
        AuthRouterModule
    ],
    providers: [
        AuthService,
        SessionService
    ],
    exports: []
})

export class AuthModule {}