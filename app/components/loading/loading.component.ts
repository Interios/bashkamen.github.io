import { Component, Input, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'spinner',
  template: `
    <div *ngIf="show" class="loading">
        <div class="lds-dual-ring"></div>
        <ng-content></ng-content>
    </div>
  `
})
export class LoadingComponent implements OnInit {  
    @Input() name: string;
    @Input() group: string;
    @Input() show = false;

    constructor(private loading: LoadingService) {}

    ngOnInit(): void {
        if (!this.name) throw new Error("Loading must have a 'name' attribute.");

        this.loading._register(this);
    }
}