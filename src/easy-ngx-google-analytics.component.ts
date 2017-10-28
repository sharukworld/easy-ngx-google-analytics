import { EasyAnalyticsConfig } from './easy-analytics.config';

import { Component, Input } from '@angular/core';
import { EasyNgxGoogleAnalyticsService } from './easy-ngx-google-analytics.service';
import {Router, NavigationEnd} from '@angular/router';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';


declare var gtag:any;
@Component({
  selector: 'easy-ngx-google-analytics',
  template: ''
})

export class EasyNgxGoogleAnalyticsComponent {

  @Input() config : EasyAnalyticsConfig;
  constructor(
    private service: EasyNgxGoogleAnalyticsService
    , private router: Router
  ) {
    router.events.distinctUntilChanged((previous: any, current: any) => {
      console.error('here wew', this.config)
      if(current instanceof NavigationEnd) {
          return previous.url === current.url;
      }
      return true;
  }).filter(x => {
    if(this.config.routesToIgnore == null) {
      return true;
    }
    else{
      for(let routesIndex = 0;routesIndex < this.config.routesToIgnore.length; routesIndex++ ){
        let routeIgnore : boolean = this.config.routesToIgnore[routesIndex].test(x.url)
        if(routeIgnore) {
          return false;
        }
      }
      return true;
    }
  })
    .subscribe((x: any) => { 
    let finalUrl : string = (this.config.urlTrimmerFunction != null)?(this.config.urlTrimmerFunction(x.url)):x.url;
    gtag('config', this.config.gaTrackingId, {'page_path': finalUrl});
  });
  }

}
