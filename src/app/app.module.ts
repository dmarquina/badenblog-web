import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';

import { FacebookModule } from 'ngx-facebook';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { TagInputModule } from 'ngx-chips';
import 'hammerjs';
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { LoginGuard } from './guards/login.guard';
import { LoggedGuard } from './guards/logged.guard';

import { AppComponent } from './commons/components/app/app.component';
import { SignupComponent } from './business/sign/signup/signup.component';
import { FacebookComponent } from './business/sign/facebooklogin/facebook.component';
import { EmailComponent } from './business/sign/signin/email/email.component';
import { NavigationbarComponent } from './commons/components/navigationbar/navigationbar.component';
import { PostscontainerComponent } from './business/posts/postfeed/postscontainer/postscontainer.component';
import { PostComponent } from './business/posts/postfeed/post/post.component';

import { TruncatePipe } from './commons/pipes/truncate';
import { SearcherComponent } from './business/posts/postfeed/searcher/searcher.component';
import { PostfeedComponent } from './business/posts/postfeed/postfeed.component';
import { SigninComponent } from './business/sign/signin/signin.component';
import { RestController } from './commons/util/rest.controller';
import { NewpostComponent } from './business/posts/newpost/newpost.component';
import { MaterialchipsComponent } from './commons/components/materialchips/materialchips.component';

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
    MaterialchipsComponent
  ],
  imports: [
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
    routes
  ],
  providers: [LoginGuard,
              LoggedGuard,
              RestController],
  bootstrap: [AppComponent]
})
export class AppModule { }
