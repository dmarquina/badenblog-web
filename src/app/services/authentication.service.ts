import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

const BASE_URL = 'http://localhost:9000';

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(email: string, password: string) {
        let loginURL = BASE_URL + '/auth';
        let data = { username: email, 
                     password: password }
        return this.http.post(loginURL, data)
            .toPromise()
            .then((response: Response) => {
                if (response.text()!="") {
                    let token = response.json() && response.json().token;
                    this.token = token;
                    return true;
                } else {
                    return false;
                }
            });
    }

    loginfb(fbtoken){   
        let loginfbURL = BASE_URL + '/auth/convert-token';
        let headers = new Headers({ 'Content-Type': 'application/json',});
        let data = {
            "grant_type": "convert_token",
            "client_id": "jbqujDUkP6zfJJorKTrWvTYjD33eTkGQyxKFDrfl",
            "client_secret": "lq0ZNnH1i1OZCyBHQhs7QGoCTHbI6gUuzjpoDIPNSJ8gTdjQ9sxEPdk4bakE42PI2pHi2pvQqd43sOYYAtp0QXe515lz4QSsZYBG8dyTJ11HJqBYjSq1efWhAxp7reow",
            "backend": "facebook",
            "token": fbtoken, }

        let options = new RequestOptions(); 
        return this.http.post(loginfbURL, data, { headers: headers })
            .toPromise()
            .then( response => {
                let data = response.json() ;
                let token = data.token_type + " " + data.access_token;
            })
            .catch(this.error);
        
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }

    showUserInformation(email) {
        let getUserURL = BASE_URL + '/user/jwtUser';
        let tokenFront = this.token;
        let headers = new Headers({ 'Content-Type': 'application/json'}); 
        let options = new RequestOptions({ headers: headers }); 
        return this.http.post(getUserURL,tokenFront,options)
                .toPromise()
                .then( response => response.json() )
                .catch(this.error);
    }

    getUserById(idUser) {
        let findUserUrl = BASE_URL+'/'+idUser;
         return this.http.get(findUserUrl)
            .toPromise()
            .then( response => response.json())
            .catch(this.error);
     }

    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
        errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    error(error:any){
        console.log('Error');
        return Promise.reject(error.message || error);
    }
}