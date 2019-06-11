import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}
    intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            // Swal.fire({
            //     type: 'error',
            //     title: 'Oops...',
            //     text: 'Something went wrong!'
            // })
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.router.navigate(['login']); 
            }
            if(err.status === 500) {
                this.router.navigate(['/']);
            }
            const error = err.error.message || err.statusText;
            return throwError(err);
        }))
    }
}
