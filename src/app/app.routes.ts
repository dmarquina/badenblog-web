import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuard } from './guards/login.guard';
import { LoggedGuard } from './guards/logged.guard';

import { AppComponent } from './commons/components/app/app.component';
import { NewpostComponent } from './business/posts/newpost/newpost.component';
import { PostfeedComponent } from './business/posts/postfeed/postfeed.component';
import { SigninComponent } from './business/sign/signin/signin.component';
import { SignupComponent } from './business/sign/signup/signup.component';

export const router: Routes = [
    { path: '', component: NewpostComponent },
    { path: 'postfeed', component: PostfeedComponent },
    { path: 'iniciarSesion', component: SigninComponent,canActivate: [LoggedGuard] },
    { path: 'registrarse', component: SignupComponent,canActivate: [LoggedGuard] }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);