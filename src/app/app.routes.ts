import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuard } from './guards/login.guard';
import { LoggedGuard } from './guards/logged.guard';

import { AppComponent } from './commons/components/app/app.component';
import { NewpostComponent } from './business/posts/newpost/newpost.component';
import { PostfeedComponent } from './business/posts/postfeed/postfeed.component';
import { SigninComponent } from './business/sign/signin/signin.component';
import { SignupComponent } from './business/sign/signup/signup.component';
import { DetailpostComponent } from './business/posts/detailpost/detailpost.component';

export const router: Routes = [
    { path: '', component: PostfeedComponent },
    { path: 'newpost', component: NewpostComponent},
    { path: 'postfeed', component: PostfeedComponent },
    { path: 'detailpost/:id', component: DetailpostComponent },
    { path: 'iniciarSesion', component: SigninComponent},
    { path: 'registrarse', component: SignupComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);