import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor( ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = false;
        if (currentUser) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${ currentUser }`
                }
            });
        }

        return next.handle(request);
    }
}