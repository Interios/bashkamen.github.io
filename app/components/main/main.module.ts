import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home';
import { MainRouterModule } from './main.router.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ChatComponent } from '../chat';
import { RatesComponent } from '../rates';

@NgModule({
    declarations: [
        HomeComponent,
        ChatComponent,
        RatesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MainRouterModule
    ],
    providers: [],
    exports: []
})

export class MainModule {}