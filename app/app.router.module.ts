import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routers: Routes = [
    { path: '', loadChildren: './components/auth/auth.module#AuthModule' },
    { path: '', loadChildren: './components/main/main.module#MainModule' },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(routers)],
    exports: [RouterModule]
})

export class AppRouterModule {}