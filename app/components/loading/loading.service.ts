import { Injectable } from '@angular/core';  
import { LoadingComponent } from './loading.component';

@Injectable()
export class LoadingService {  
  private loadingCache = new Set<LoadingComponent>();

  _register(loading: LoadingComponent): void {
    this.loadingCache.add(loading);
  }

  show(loadingName: string): void {
    this.loadingCache.forEach(loading => {
      if (loading.name === loadingName) {
        loading.show = true;
      }
    });
  }

  hide(loadingName: string, delay: number = 0): void {
    this.loadingCache.forEach(loading => {
      if (loading.name === loadingName) {
        setTimeout( () => {
          loading.show = false;
        }, delay );
      }
    });
  }
}