import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent, HttpResponse, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth-service.service";
import { tap, finalize } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  lcount: number = 0;
  constructor(private router: Router,private auth:AuthService) {  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.auth.getUserDetails();
    // if (token) {
    //   req = req.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${token.token}`,
    //     }
    //   })
    // }
    // req = req.clone({
    //   setHeaders: {
    //     'Content-Type': 'application/json'
    //   }
    // });

    let headers: any = {};

    if (token) {
      headers['Authorization'] = `Bearer ${token.token}`;
    }
  
    // Only set 'Content-Type' if it is NOT 'multipart/form-data'
    if (!(req.body instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
    }
  
    req = req.clone({ setHeaders: headers });



        this.lcount++;
        if (this.lcount > 0) {
           this.auth.setLoading(true);
        }          
        return next.handle(req).pipe(
          tap(event => {
            if (event instanceof HttpResponse) {
              if (this.lcount == 0) {           
                this.auth.setLoading(false);
              }
             
            }
          }, error => {
              if (error.status == 401) {
                this.router.navigateByUrl('/auth/login');
              }
          }), finalize(() => {
            this.lcount--;
            if (this.lcount == 0) {
              this.auth.setLoading(false);
            }
          }));
       
    }
}
