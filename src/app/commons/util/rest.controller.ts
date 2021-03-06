import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {_throw} from 'rxjs/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {catchError, map, tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

const headers = new HttpHeaders({'Content-Type': 'application/json'});

export interface IRestItems<T> {
  listCompany: T [];
  page: any;
}

export interface IRestError {
  error: IRestBodyError;
  headers: HttpHeaders;
  message: string;
  name: string;
  ok: boolean;
  status: number;
  statusText: string;
  url: string;
}

interface IRestBodyError {
  code: string;
  description: string;
  errorType: string;
  fieldErrors: any [];
}

@Injectable()
export class RestController {

  private _urlApi = environment.urlApi; // URL to web api
  constructor(private http: HttpClient) {
  }

  public getPaginationResponse(endpoint: string, pageState) {
    let paramPageState = '';
    if (pageState !== '') {
      paramPageState = '/?pageState=' + pageState;
    }
    return this.http.get<any>(this._urlApi + endpoint + paramPageState
      , {observe: 'response'});
  }

  public postPaginationResponse(endpoint: string, pageState, body: Object) {
    let paramPageState = '';
    if (pageState !== '') {
      paramPageState = '/?pageState=' + pageState;
    }
    return this.http.post<any>(this._urlApi + endpoint + paramPageState
      , {'categoryIds': body}, {observe: 'response'});
  }

  public get<T>(endpoint: string, params: Object = {}): Observable<T> {
    const paramsRequest: any = {
      headers: headers,
      params: params
    };
    return this.http.get(this._urlApi + endpoint, paramsRequest)
      .pipe(
        map(obj => obj),
        tap(heroes => this.log('fetched data')),
        catchError(this.handleError('get'))
      );
  }

  public post<T>(endpoint: string, body: Object, params: Object = {}): Observable<T> {
    const paramsRequest: any = {
      headers: headers,
      params: params
    };
    return this.http.post(this._urlApi + endpoint, body, paramsRequest)
      .pipe(
        map(obj => obj),
        tap(heroes => this.log('fetched data')),
        catchError(this.handleError('post'))
      );
  }

  private log(message: string) {
    if (!environment.production) {
      console.log('---------------------------------------------');
      console.log(message);
      console.log('---------------------------------------------');
    }
  }

  private handleError(operation = 'operation') {
    return (error: IRestError): Observable<any> => {
      return _throw(error);
    };
  }
}
