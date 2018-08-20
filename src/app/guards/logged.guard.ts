import { CanActivate, Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class LoggedGuard implements CanActivate {
  authState: any = null;

  constructor(private router: Router
    ,private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
  });}

  get authenticated(): boolean {
    return this.authState !== null;
  }

  canActivate() {
    return this.authenticated;
  }
}