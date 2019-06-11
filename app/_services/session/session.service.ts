import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SessionService {
    set(name:string, data: string) {
        window.localStorage.setItem(name,data);
    }
    get(name:string) {
        window.localStorage.getItem(name);
    }
    remove(name:string) {
        window.localStorage.removeItem(name);
    }
}