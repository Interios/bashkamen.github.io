import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { SessionService } from '../session';
import { LoadingService } from 'src/app/components/loading/loading.service';

const url = "https://casino-dev.azurewebsites.net";

class User {
    token:string;
}

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(
        private http: HttpClient,
        private session: SessionService,
        private loading: LoadingService
    ) { }
    
    login = ({ Login, Password }) => {
        this.loading.show('loading...');
        this.http.post( url + '/api/auth/login', { Login, Password }, { responseType: 'text' })
            .subscribe((data) => {
                data ? this.session.set('auth.token', data) : '';
                this.loading.hide('loading...', 300);
            }, (err: HttpErrorResponse) => {
                console.log('error: ', err);
                this.loading.hide('loading...', 300);
            })
    }
        
    
    registration = ({ Login, Password }) => {
        this.http.post( url + '/api/auth/register', { Login, Password }, { responseType: 'text' })
            .subscribe((data) => {
                data ? this.session.set('auth.token', data) : '';
            }, (err: HttpErrorResponse) => {
                console.log('error: ', err);
            })
    }
}