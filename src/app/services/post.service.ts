import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Util } from '../util';

const CONTEXT = '/post';
const BASE_URL = Util.IP_API_CONNECTION + CONTEXT;
const ENDPOINT_ALL_ACTIVE = '/actives?page=0';

@Injectable()
export class PostService {
    constructor(private http: Http) { }

    getActivePosts () {
        let getActivesUrl = BASE_URL + ENDPOINT_ALL_ACTIVE;
        return this.http.get(getActivesUrl)
                        .toPromise()
                        .then( response => response.json() )
                        .catch(this.handleError);    
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
        return errMsg;
    }
}