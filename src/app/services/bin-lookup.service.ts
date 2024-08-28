import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BinLookupService {

  
  private APIURL = `${environment.apiURL}`;
  private APIURLpublic = `${environment.apiURLpublic}`;

  constructor(public httpClient: HttpClient) { this.httpClient=httpClient }

  

  testInventory(param: any): Observable<any> {
    console.log("param",JSON.stringify(param));
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('scope', 'mobility-user')
      .set('useMobility',"true");
      
  
    return this.httpClient.get(`https://mobility.datapelapi.net/api.datapel/v2.0/mobility/inventory?277`,  { headers })
      .pipe(
        catchError((err => {
          return this.handleError(err);
        }))
      );
  }

  testInventoryList(param: any): Observable<any> {
    console.log("param",JSON.stringify(param));
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('scope', 'mobility-user')
      .set('useMobility',"true");
  
    return this.httpClient.get(`https://mobility.datapelapi.net/api.datapel/v2.0/mobility/inventorylist`, { headers })
      .pipe(
        catchError((err => {
          return this.handleError(err);
        }))
      );
  }

  getLocation(param: any): Observable<any> {
    console.log("param",JSON.stringify(param));
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('scope', 'mobility-user')
      .set('useMobility',"true");
  
    return this.httpClient.get(`https://mobility.datapelapi.net/api.datapel/v2.0/mobility/location?1`, { headers })
      .pipe(
        catchError((err => {
          return this.handleError(err);
        }))
      );
  }

  getLocationList(param: any): Observable<any> {
    console.log("param",JSON.stringify(param));
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('scope', 'mobility-user')
      .set('useMobility',"true");
  
    return this.httpClient.get(`https://mobility.datapelapi.net/api.datapel/v2.0/mobility/locations?$filter=LocationCode ne '*ALLLOCATIONS'&$orderby=LocationCode`,  { headers })
      .pipe(
        catchError((err => {
          return this.handleError(err);
        }))
      );
  }

  testProductArticles(param: any): Observable<any> {
    console.log("param",JSON.stringify(param));
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('scope', 'mobility-user')
      .set('useMobility',"true");
  
    return this.httpClient.get(`https://mobility.datapelapi.net/api.datapel/v2.0/mobility/productarticles?$filter=LocationCode eq '${param.location}' and BIN eq '${param.code}'`, { headers })
      .pipe(
        catchError((err => {
          return this.handleError(err);
        }))
      );
  }

  


  private handleError(error: any): Observable<any> {
    return throwError(error);
  }
}
