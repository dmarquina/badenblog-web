import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { FacebookService, InitParams,LoginResponse} from 'ngx-facebook';

import { AuthenticationService } from './../../../services/authentication.service';
import { UserService } from '../../../services/user.service';
import { Userprofile } from '../../../interfaces/userprofile';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css'],
  providers: [AuthenticationService,UserService]
})
export class FacebookComponent implements OnInit {
  userprofile : Userprofile;
  disableSocialbtn = false;
  
  constructor(private fb: FacebookService,
    private authService: AuthenticationService,
    private userService: UserService,
    private router:Router) { 
      let fbParams: InitParams = {
          appId: '175492642940015',
          xfbml: true,
          version: 'v2.6'
          };
      this.fb.init(fbParams);
  }

  getClassRoute(){
    if (this.router.url === '/iniciarSesion'){
      return "l10 push-l1";
    }
  }

  loginFb() {
    this.disableSocialbtn=true;
    this.fb.login({
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,email'
    }).then(
      (response: LoginResponse) => {
        if(response!= null && response!= undefined){
          let fbAccesToken = response.authResponse.accessToken;
          this.fb.api('/me?fields=id,name,first_name,last_name,gender,email')
           .then(
              (response: any) => {
                  this.userprofile.name = response.name
                  this.userprofile.UID = response.id;
                  this.userprofile.name=response.first_name;
                  this.userprofile.lastName=response.last_name;
                  this.userprofile.gender=response.gender,
                  this.userprofile.email = response.email;
                  this.userprofile.provider = "Facebook";
                  this.userService.createUser(this.userprofile)
                    .then(
                      data => {
                        localStorage.setItem('currentUser', JSON.stringify(this.userprofile));
                        this.router.navigate(['/']);},
                      error => {
                        this.showError()
                        this.disableSocialbtn=false;
                      }
                    )
              },
              (error: any) => {
                this.disableSocialbtn=false;
              }
            )
          }
        },
      (error: any) => {
        console.error("error");
        this.disableSocialbtn=false;
      }
    );
  }

  loginGoogle() {
    
  }

  showError() {
        console.log("Error");
  }

  clearUserprofile(){
    this.userprofile = {
      id: null,
      name: null,
      lastName: null,
      gender:null,
      email: null,
      password: null,
      provider:null,
      UID:null
    }
  }


  ngOnInit(){
    this.clearUserprofile();
  }
}
