import { Component, OnInit } from '@angular/core';
import { Userprofile } from '../../../interfaces/userprofile';
import { AuthenticationService } from './../../../services/authentication.service';
import { FacebookService } from 'ngx-facebook';
import { Router } from '@angular/router';

@Component({
  selector: 'navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css'],
  providers: [AuthenticationService]
})
export class NavigationbarComponent implements OnInit {
  currentUser : Userprofile;

  constructor(private router: Router, 
              private authenticationService: AuthenticationService,
              private fbService: FacebookService) { }

  goToLogin(){
    this.router.navigate(['/iniciarSesion'])
  }

  goToNewPost(){
    this.router.navigate(['/newpost'])
  }

  isLogin(){
    this.currentUser = localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem('currentUser')):null;
    return this.currentUser?true:false; 
  }

  logout(){
    this.fbService.logout();
    this.authenticationService.logout();
    this.showThanks();
    this.router.navigate(['/']);
  }

  showThanks(){
    console.log("say good bye");
  }

  ngOnInit() {
      
  }

}
