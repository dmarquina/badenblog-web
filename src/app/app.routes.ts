import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuard } from './guards/login.guard';
import { LoggedGuard } from './guards/logged.guard';

import { AppComponent } from './components/app/app.component';
import { PostfeedComponent } from './business/posts/postfeed/postfeed.component';
import { MembersComponent } from './components/members/members.component';
import { SigninComponent } from './business/sign/signin/signin.component';
import { SignupComponent } from './business/sign/signup/signup.component';

export const router: Routes = [
    { path: '', component: PostfeedComponent },
    { path: 'iniciarSesion', component: SigninComponent,canActivate: [LoggedGuard] },
    { path: 'registrarse', component: SignupComponent,canActivate: [LoggedGuard] },
    { path: 'members', component: MembersComponent, canActivate: [LoginGuard] }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);