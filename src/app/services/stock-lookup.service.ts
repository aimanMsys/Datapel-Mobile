import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockLookupService {
  testInventoryList(barcode: any) {
    throw new Error('Method not implemented.');
  }
  testLocation(barcode: any) {
    throw new Error('Method not implemented.');
  }
  testLocationList(barcode: any) {
    throw new Error('Method not implemented.');
  }
  testProductArticles(barcode: any) {
    throw new Error('Method not implemented.');
  }

  
  private APIURL = `${environment.apiURL}`;
  private APIURLpublic = `${environment.apiURLpublic}`;

  constructor(public httpClient: HttpClient) { this.httpClient=httpClient }


  product(code: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('scope', 'mobility-user')
      .set('useMobility',"true");
  
    return this.httpClient.get(`${this.APIURL}/api.datapel/v2.0/mobility/product?${code}`, { headers })
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
