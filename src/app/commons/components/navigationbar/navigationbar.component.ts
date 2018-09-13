import {Component, OnInit} from '@angular/core';
import {Userprofile} from '../../../interfaces/userprofile';
import {Router} from '@angular/router';
import {UserService} from '../../../shared/services/user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {
  displayName: string;
  isLogged: boolean;

  constructor(private router: Router,
              private authService: AuthService){}

  goToSignIn() {
    this.router.navigate(['/iniciarSesion']);
  }

  goToNewPost() {
    if(this.authService.authenticated){
      this.router.navigate(['/newpost']);
    }else{
      this.goToSignIn();
    }
  }

  addToSchedules(){
    this.router.navigate(['/myschedules']);
  }
  
  signOut(): void {
    this.authService.signOut();
    this.router.navigate(['/'])
  }

  ngOnInit() {
  
  }

}
