import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

import { from as fromPromise,Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { ht } from 'date-fns/locale';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private APIURL = `${environment.apiURL}`;
  private APIURLpublic = `${environment.apiURLpublic}`;

  constructor(public httpClient: HttpClient) { this.httpClient=httpClient }

  // Get user session
  async getSession() {

    // ...
    // put auth session here
    // ...

    // Sample only - remove this after real authentication / session
    let session = {
      email: 'john.doe@mail.com'
    }

    return false;
    // return session;
  }

  // Sign in
  async signIn(email: string, password: string) {

    // Sample only - remove this after real authentication / session
    let sample_user = {
      email: email,
      password: password
    }

    return sample_user;
  }

  // Sign up
  async signUp(email: string, password: string) {

    // Sample only - remove this after real authentication / session
    let sample_user = {
      email: email,
      password: password
    }

    return sample_user;
  }

  // Sign out
  async signOut() {

    // ...
    // clean subscriptions / local storage etc. here
    // ...

    // Navigate to sign-in
    // this.router.navigateByUrl('/signin');
  }

  // login(param:any): Observable<any> {
  //   var username = "datapel@devtest.com";
  //   var password = "";
  //   const credentials = btoa(`${username}:${password}`);

  //   const headers = new HttpHeaders()
  //     .set('Content-Type', 'application/json')
  //     .set('grant_type', 'password')
  //     // .set('username', 'datapel@devtest.com')
  //     // .set('password', '')
  //     .set('scope', 'mobility_user')
  //     .set('Authorization',`Basic ${credentials}`);

  //   return this.httpClient.post('https://mobility.datapelapi.net/api.datapel/v2.0/token', null, { headers })
  //     .pipe(
  //       catchError((err => {
  //         return this.handleError(err);
  //       })
  //     ));
  // }

  loginMobility(param: any): Observable<any> {
    console.log("param",JSON.stringify(param));
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('grant_type', 'password')
      // .set('username', 'datapel@devtest.com')
      .set('username', param.username)
      .set('password', param.password)  // Assuming the password is passed as part of the param object
      .set('scope', 'mobility-user')

  
    return this.httpClient.post(`${this.APIURL}/api.datapel/v2.0/mobility/user-token`, null, { headers })
      .pipe(
        catchError((err => {
          return this.handleError(err);
        }))
      );
  }

  token(param: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('grant_type', 'password')
      .set('username', '1RjENhNssDEdrsYK')
      .set('password', 'h1SOJhDHKmGkwEnI')  // Assuming the password is passed as part of the param object
      .set('scope', 'mobility');
  
    return this.httpClient.post(`${this.APIURL}/api.datapel/v2.0/token`, null, { headers })
      .pipe(
        catchError((err => {
          return this.handleError(err);
        }))
      );
  }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'grant_type': 'password',
      'username': username,
      'password': password,
      'scope': 'mobility',
      'Access-Control-Allow-Origin':'*',
    });

    return this.httpClient.post(`${this.APIURL}/api.datapel/v2.0/token`, null, { headers })
      .pipe(
        catchError((err) => {
          return this.handleError(err);
        })
      );
  }

  authenticate(username: string, code: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      '2fa_code':code,
      'username':username,
      "skip":"true"
    });

    return this.httpClient.post(`${this.APIURL}/api.datapel/v2.0/2fa`, null, { headers })
      .pipe(
        catchError((err) => {
          return this.handleError(err);
        })
      );
  }

  
       

  private handleError(error: any): Observable<any> {
    return throwError(error);
  }
}
