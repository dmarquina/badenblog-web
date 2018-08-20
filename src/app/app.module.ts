import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';

import {FacebookModule} from 'ngx-facebook';
import {NgxPaginationModule} from 'ngx-pagination';
import {TagInputModule} from 'ngx-chips';
import 'hammerjs';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {routes} from './app.routes';
import {LoginGuard} from './guards/login.guard';
import {LoggedGuard} from './guards/logged.guard';

import {AppComponent} from './commons/components/app/app.component';
import {SignupComponent} from './business/sign/signup/signup.component';
import {FacebookComponent} from './business/sign/facebooklogin/facebooklogin.component';
import {EmailComponent} from './business/sign/signin/email/email.component';
import {NavigationbarComponent} from './commons/components/navigationbar/navigationbar.component';
import {PostscontainerComponent} from './business/posts/postfeed/postscontainer/postscontainer.component';
import {PostComponent} from './business/posts/postfeed/post/post.component';

import {TruncatePipe} from './commons/pipes/truncate';
import {SearcherComponent} from './business/posts/postfeed/searcher/searcher.component';
import {PostfeedComponent} from './business/posts/postfeed/postfeed.component';
import {SigninComponent} from './business/sign/signin/signin.component';
import {RestController} from './commons/util/rest.controller';
import {NewpostComponent} from './business/posts/newpost/newpost.component';
import {MaterialchipsComponent} from './commons/components/materialchips/materialchips.component';
import {DetailpostComponent} from './business/posts/detailpost/detailpost.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import {firebaseEnvironment} from '../environments/environment';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    TruncatePipe,

    AppComponent,
    SignupComponent,
    EmailComponent,
    FacebookComponent,
    NavigationbarComponent,
    PostscontainerComponent,
    PostComponent,
    SearcherComponent,
    PostfeedComponent,
    SigninComponent,
    NewpostComponent,
    MaterialchipsComponent,
    DetailpostComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseEnvironment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    NgxPaginationModule,
    TagInputModule,
    FacebookModule.forRoot(),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSliderModule,
    MatChipsModule,
    MatDialogModule,
    routes
  ],
  providers: [LoginGuard,
    LoggedGuard,
    RestController,
    AngularFireAuth,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
