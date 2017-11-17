import { Injectable, Injector } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse  } from '@angular/common/http'
import { AuthService } from './auth.service'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    private router; 
    
    constructor(private injector: Injector){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        var auth = this.injector.get(AuthService)
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', 'token ' + auth.token )
        })
        
        return next.handle(authRequest).do(event => {}, res => {
            //if (this.router == null) {
            this.router = this.injector.get(Router);
            //}
            if (res instanceof HttpErrorResponse) {
                if(res.status === 401 || res.status === 403){
                    console.log("Token Expired: redirecting to login.");
                    this.router.navigate(['login']);
                }
                if(res.status === 500){
                    console.log("Server Error.")
                    this.router.navigate(['error'])
                }
            }
        });
    }
}