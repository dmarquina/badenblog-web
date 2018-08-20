import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user.service';
import { Userprofile } from '../../../interfaces/userprofile';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[UserService],
})

export class SignupComponent implements OnInit {
  state: string = '';
  password2: string = '';
  error: any;
  newUser : Userprofile;
  disableCreate=false;
  constructor(private router: Router, 
              private userService : UserService) {}

  goToLogin(){
    let link = ['/iniciarSesion'];
    this.router.navigate(link);
  }

  createUser(){
    if(this.newUser.password !== this.password2){
      this.showWarningPasswordDismatch();
      this.newUser.password= "";
      this.password2 = "";
    }else{
      this.disableCreate=true;
      this.newUser.provider = "Email";
      this.userService.createUser(this.newUser)
        .then( 
            data => {
              if(!data.result){
                this.showWarningDuplicateUser(data.message);  
                this.newUser.password= "";
                this.password2 = "";
                this.disableCreate=false;
              }else{
                //this.login(this.newUser.email , this.newUser.password)
                this.clearNewUser();
              }
            },
            error => this.showError()
          );
    }
  }

  /*login(email,password){
    this.authService.login(email, password)
      .then(result => {
          if (result == true) {
              this.authService.showUserInformation(email)
                  .then(
                      data=>{
                          localStorage.setItem('currentUser', JSON.stringify(data));
                          this.router.navigate(['/']);
                          },
                      error => this.showError()
                  );
          } else {
              this.showError();
          }
      }).catch(
        (err) => {
        this.error = err;
      });
  }*/

  showSuccess() {
        console.log("Succes");
  }
  
  showWarningPasswordDismatch() {
        console.log("Warning");
  }

  showWarningDuplicateUser(message) {
        console.log(message);
  }

  showError() {
        console.log("Error");
  }

  clearNewUser(){
    this.newUser = {
      id:null,
      name:null,
      lastName:null,
      gender:null,
      email:null,
      password:null,
      provider:null,
      UID:null
    };
  }

  ngOnInit() {
    this.clearNewUser();
  }

}
