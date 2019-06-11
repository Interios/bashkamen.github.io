import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { AuthService } from 'src/app/_services/auth/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
    authForm: FormGroup;

    constructor(private iconReg:SvgIconRegistryService, private fb: FormBuilder, private auth: AuthService) {
        this.iconReg.addSvg('logo',
            '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><defs><linearGradient id="a3" x1="-35.391%" y1="100%" y2="0%"><stop offset="0%" stop-color="#FFF"></stop><stop offset="100%" stop-color="#5460EA"></stop></linearGradient><linearGradient id="b3" x1="50%" x2="50%" y1="117.548%" y2="13.594%"><stop offset="0%" stop-color="#4AE7E6" stop-opacity=".332"></stop><stop offset="37.158%" stop-color="#48D1E2"></stop><stop offset="100%" stop-color="#3F48C7" stop-opacity=".8"></stop></linearGradient><linearGradient id="c3" x1="50%" x2="50%" y1="111.963%" y2="12.561%"><stop offset="0%" stop-color="#4AE7E6" stop-opacity=".332"></stop><stop offset="42.766%" stop-color="#48D1E2"></stop><stop offset="100%" stop-color="#3F48C7" stop-opacity=".8"></stop></linearGradient><linearGradient id="d3" x1="50%" x2="50%" y1="121.285%" y2="0%"><stop offset="0%" stop-color="#4AE7E6" stop-opacity=".332"></stop><stop offset="51.458%" stop-color="#48D1E2"></stop><stop offset="100%" stop-color="#3F48C7" stop-opacity=".8"></stop></linearGradient><linearGradient id="e3" x1="50%" x2="50%" y1="107.399%" y2="7.052%"><stop offset="0%" stop-color="#4AE7E6" stop-opacity=".332"></stop><stop offset="45.032%" stop-color="#48D1E2"></stop><stop offset="100%" stop-color="#3F48C7" stop-opacity=".8"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect width="60" height="60" fill="#FFF" rx="30"></rect><g transform="translate(14 15)"><path fill="url(#a3)" d="M2.568 7.011h10.894V8.34H2.568z" transform="rotate(-42 8.014 7.676)"></path><path fill="url(#a3)" d="M11.649 7.18h8.925v1.329h-8.925z" transform="scale(-1 1) rotate(-39 0 53.342)"></path><path fill="url(#a3)" d="M18.908 5.804h10.894v1.329H18.908z" transform="rotate(-42 24.355 6.468)"></path><ellipse cx="3.064" cy="12.056" fill="url(#a3)" rx="2.383" ry="2.326"></ellipse><ellipse cx="11.915" cy="4.746" fill="url(#a3)" rx="2.383" ry="2.326"></ellipse><ellipse cx="19.404" cy="10.062" fill="url(#a3)" rx="2.383" ry="2.326"></ellipse><ellipse cx="28.255" cy="2.753" fill="url(#a3)" rx="2.383" ry="2.326"></ellipse><path fill="url(#b3)" d="M3.404 19.033a3.404 3.404 0 0 1 3.405 3.404V29H0v-6.563a3.404 3.404 0 0 1 3.404-3.404z"></path><path fill="url(#c3)" d="M11.574 12.388a3.404 3.404 0 0 1 3.405 3.404V29H8.17V15.792a3.404 3.404 0 0 1 3.404-3.404z"></path><path fill="url(#d3)" d="M19.745 17.04a3.404 3.404 0 0 1 3.404 3.404V29H16.34v-8.556a3.404 3.404 0 0 1 3.405-3.405z"></path><path fill="url(#e3)" d="M27.915 9.73a3.404 3.404 0 0 1 3.404 3.404V29h-6.808V13.134a3.404 3.404 0 0 1 3.404-3.404z"></path></g></g></svg>'
        );
        this.iconReg.loadSvg('logo');
    }

    ngOnInit() {
        this.createForm();
    }
    
    createForm() {
        this.authForm = this.fb.group({
            Login: ['', [Validators.pattern(/([a-zA-Z0-9_-]{5})/), Validators.required] ],
            Password: ['', [Validators.pattern(/([a-zA-Z0-9_-]{5})/), Validators.required]]
        });
    }

    handleAuth() {
        this.authForm.status == 'VALID' ? 
            this.auth.registration(this.authForm.value) : '';
    }
}