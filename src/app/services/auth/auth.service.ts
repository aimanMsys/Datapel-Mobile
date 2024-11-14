import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

import { BehaviorSubject, from as fromPromise,interval,Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { ht } from 'date-fns/locale';
import { Keyboard } from '@capacitor/keyboard';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private APIURL = `${environment.apiURL}`;
  private APIURLpublic = `${environment.apiURLpublic}`;
  heartbeatSubscription: any;
  private keyboardState = new BehaviorSubject<boolean>(false);

  keyboardState$ = this.keyboardState.asObservable();

  constructor(public httpClient: HttpClient) { this.httpClient=httpClient }


  toggleKeyboard(visible: boolean) {
    this.keyboardState.next(visible);
    if (visible) {
      Keyboard.show();
    } else {
      Keyboard.hide();
    }
  }
  
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

  sessionLogin(deviceId: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('scope', 'mobility-user')
      .set('useMobility',"true");

    const body = `"${deviceId}"`;

    return this.httpClient.post(`${this.APIURL}/api.datapel/v2.0/mobility/login`, body, { headers })
      .pipe(
        catchError((err) => {
          return this.handleError(err);
        })
      );
  }

  transaction(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('scope', 'mobility-user')
      .set('useMobility',"true");

      const body= {
        "NewDataSet": {
          "tREMOTETransHeader": {
            "TransID": "",
            "TransDate": "2024-09-20",
            "SrcLocation": "WA",
            "DstLocation": "TRINITY",
            "Contact": "DECTEC Supplier",
            "User": "Clarke, Connan",
            "TransactionType": "TO"
          },
          "tREMOTETransLines": [
            {
              "Item": "1005",
              "Quantity": "55",
              "BRN": "125",
              "SrcBin": "",
              "DstBin": ""
            }
          ]
        }
      };
      

    return this.httpClient.post(`${this.APIURL}/api.datapel/v2.0/mobility/transaction`,body, { headers })
      .pipe(
        catchError((err) => {
          return this.handleError(err);
        })
      );
  }

  globalConfig(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('scope', 'mobility-user')
      .set('useMobility',"true");

      const body= {};
      

    return this.httpClient.get(`${this.APIURL}/api.datapel/v2.0/mobility/globalconfig`, { headers })
      .pipe(
        catchError((err) => {
          return this.handleError(err);
        })
      );
  }

  sessionHeartbeat(deviceId: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('scope', 'mobility-user')
      .set('useMobility',"true");

    const body = `"${deviceId}"`;

    return this.httpClient.post(`${this.APIURL}/api.datapel/v2.0/mobility/heartbeat`, body, { headers })
      .pipe(
        catchError((err) => {
          return this.handleError(err);
        })
      );
  }

  startInterval(deviceId: string,loading:any){
    this.heartbeatSubscription = interval(15000).subscribe(() => {
      console.log("Tst");
      // this.sessionHeartbeat(deviceId);
      this.sessionHeartbeat(deviceId).subscribe({
        next: (session) => {
          if (session.status == 'success') {
            // Handle success logic
          } else {
            localStorage.removeItem("user");
            localStorage.removeItem("mobility");
            this.sessionLogout(deviceId);
            // Handle failure logic
          }
        },
        error: (error) => {
          loading.dismiss();
          console.error('sessionHeartbeat', error);
          localStorage.removeItem("user");
          localStorage.removeItem("mobility");
          this.sessionLogout(deviceId);
        },
      });
    });
  }

  stopInterval() {
    if (this.heartbeatSubscription) {
      this.heartbeatSubscription.unsubscribe();
      this.heartbeatSubscription = null;
    }
  }

  sessionLogout(deviceId: string): Observable<any> {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'scope': 'mobility-user',
    //   "useMobility":"true",
    // });

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('scope', 'mobility-user')
      .set('useMobility',"true");

    const body = `"${deviceId}"`;

    return this.httpClient.post(`${this.APIURL}/api.datapel/v2.0/mobility/logout`, body, { headers })
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
