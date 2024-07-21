import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';
// import { environment } from '../../../environments/environment';
import { Router, NavigationEnd } from '@angular/router';
import { throwError,BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private router: Router,private authService:AuthService) {}
  // https://medium.com/@monkov/angular-using-httpinterceptor-for-token-refreshing-3f04ea2ccb81
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    
    let re = "signin";
    if (request.url.search(re) === -1 && localStorage.getItem('user') != null ) {
      const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') ?? '').access_token : null;
      const mobility = localStorage.getItem('mobility') ? JSON.parse(localStorage.getItem('mobility') ?? ''): null;

      let user = JSON.parse(localStorage.getItem('user') ?? '') ;
      // let token = JSON.parse(localStorage.getItem('user') ?? '').access_token;
      // let mobility = JSON.parse(localStorage.getItem('mobility') ?? '');
      console.log("mobility",JSON.stringify(mobility));
      console.log("token",JSON.stringify(token));

      if (token) {
        const skipIntercept = request.headers.has('skip');
        const useMobility = request.headers.has('useMobility');

        if(useMobility){
          request = request.clone({
            headers: request.headers.delete('useMobility')
          });
          request = request.clone({
            
            setHeaders: {
              "X-Mobility-User-Token": mobility.access_token
            }
          });
        }

        if (skipIntercept) {
            request = request.clone({
                headers: request.headers.delete('skip')
            });
        } else {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          });
        }

        console.log("request ",JSON.stringify(request));
        
      } 
    }
    
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.status === 401) {
            localStorage.removeItem("user");
            localStorage.removeItem("mobility");
            // window.location.href="/signin"
            this.router.navigate(['/signin']);
          }else if(error.status === 403){
            // window.location.href="/";
            console.log(JSON.stringify(errorMessage));
          }else{
            if (error.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = `Error: ${error.error.message}`;
              console.log(JSON.stringify(errorMessage));
            } else {
              // server-side error
              errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
            }
            console.log(JSON.stringify(errorMessage));
          }
          
          
          return throwError(errorMessage);
        })
      )
  }
   

    
}