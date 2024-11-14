import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private APIURL = `${environment.apiUrlv2}`;
  private APIURLpublic = `${environment.apiURLpublic}`;

  constructor(public httpClient: HttpClient) { this.httpClient=httpClient }

  getLocationBins(locationCode: any): Observable<any> {
    // console.log("param",JSON.stringify(param));
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('scope', 'mobility-user')
      .set('useMobility',"true");
      
  
    return this.httpClient.get(`${this.APIURL}/locationbins?$filter=LocationCode eq '${locationCode}'&$orderby=BinName`,  { headers })
      .pipe(
        catchError((err => {
          return this.handleError(err);
        }))
      );
  }

  getProductArticlesWithProductUid(param: any): Observable<any> {
    console.log("param",JSON.stringify(param));
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('scope', 'mobility-user')
      .set('useMobility',"true");
      let url = `$filter=LocationCode eq '${param.location}' and ProductUid eq ${param.productUid}`;
      if(param.code){
        url = url+ `and BIN eq '${param.code}'`;
      }
    return this.httpClient.get(`https://mobility.datapelapi.net/api.datapel/v2.0/mobility/productarticles?${url}`, { headers })
      .pipe(
        catchError((err => {
          return this.handleError(err);
        }))
      );
  }

  createTransaction(param): Observable<any> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('scope', 'mobility-user')
    .set('useMobility',"true");


    return this.httpClient.post(`${this.APIURL}/transaction`, param ,{ headers })
    .pipe(
      catchError((err => {
        return this.handleError(err);
      })
    ));
  }




  private handleError(error: any): Observable<any> {
    return throwError(error);
  }
}
