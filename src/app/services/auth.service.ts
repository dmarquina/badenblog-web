import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Util } from '../util';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
    
  authState: any = null;

    constructor(private router: Router,
        private afAuth: AngularFireAuth) {
          this.afAuth.authState.subscribe((auth) => {
            this.authState = auth
          });
}

    // Returns true if user is logged in
    get authenticated(): boolean {
        return this.authState !== null;
    }

    // Returns current user data
    get currentUser(): any {
        return this.authenticated ? this.authState : null;
    }

    // Returns
    get currentUserObservable(): any {
        return this.afAuth.authState
    }

    // Returns current user UID
    get currentUserId(): string {
        return this.authenticated ? this.authState.uid : '';
    }

    // Anonymous User
    get currentUserAnonymous(): boolean {
        return this.authenticated ? this.authState.isAnonymous : false
    }

    // Returns current user display name or Guest
    get currentUserDisplayName(): string {
        if (!this.authState) { return '' }
        else if (this.currentUserAnonymous) { return 'Anonymous' }
        else { return this.authState['displayName'] || 'User without a Name' }
    }
    
    // Sign ou
    signOut(): any {
        this.afAuth.auth.signOut();
    }
}