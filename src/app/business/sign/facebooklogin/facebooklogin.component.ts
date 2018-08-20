import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {FacebookService} from 'ngx-facebook';

import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebooklogin.component.html',
  styleUrls: ['./facebooklogin.component.css']
})
export class FacebookComponent implements OnInit {
  disableSocialbtn = false;
  constructor(private _router: Router, public _zone: NgZone,
              public afAuth: AngularFireAuth) {
  }

  doFacebookLogin() {
    return new Promise<any>((resolve, reject) =>
      this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => {
          resolve(res);
          console.log(this.afAuth);
          this.goPostFeed();
        }, err => {
          console.log(err);
          reject(err);
        }));
  }

  getClassRoute() {
    if (this._router.url === '/iniciarSesion') {
      return 'l10 push-l1';
    }
  }

  goPostFeed() {
    this._zone.run(() => {
      this._router.navigate(['/']);
    });
  }

  ngOnInit() {
  }
}
