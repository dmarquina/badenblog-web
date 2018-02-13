import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Userprofile } from '../interfaces/userprofile';
import { Observable } from 'rxjs/Rx';
import { Util } from '../util';

const BASE_URL = Util.IP_API_CONNECTION + '/user';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    getUserById(idUser) {
        let findUserUrl = BASE_URL+'/'+idUser;
         return this.http.get(findUserUrl)
            .toPromise()
            .then( response => response.json() )
            .catch(this.error);
     }

    createUser (body: Object) {
        let createUrl = BASE_URL+'/newUser';
        let bodyString = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json' }); 
        let options = new RequestOptions({ headers: headers }); 
        return this.http.post(createUrl, body,options)
                        .toPromise()
                        .then(response => response.json())
                        .catch(this.error);      
    } 

    updateUser (body: Object) {
        let updateUrl = BASE_URL + '/updateUser';
        let bodyString = JSON.stringify(body); 
        let headers = new Headers({ 'Content-Type': 'application/json' }); 
        let options = new RequestOptions({ headers: headers }); 
        return this.http.put(`${updateUrl}/${body['user']['idUsuario']}`, body, options) 
                        .toPromise()
                        .then(this.extractData)
                        .catch(this.error); 
    }  

    deleteUser (id : number) {
        let deleteUrl = BASE_URL + '/deleteUser';
        return this.http.delete(`${deleteUrl}/${id}`)
                        .toPromise()
                        .then(response => response.json())
                        .catch(this.error); 
    }  

    getUsers(){
        let url = '/all'
        return this.http.get(BASE_URL+url)
        .toPromise()
        .then( response => response.json() )
        .catch(this.error);
    }


    error(error:any){
        console.log('Error');
        return Promise.reject(error.message || error);
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
}