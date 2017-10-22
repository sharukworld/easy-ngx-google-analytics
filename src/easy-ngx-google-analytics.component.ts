import { EasyAnalyticsConfig } from './EasyAnalyticsConfig';
import { Component } from '@angular/core';
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

  constructor(
    private service: EasyNgxGoogleAnalyticsService
    , private router: Router
  ) {
    let config :EasyAnalyticsConfig  = this.service.getConfig();
    router.events.distinctUntilChanged((previous: any, current: any) => {
      if(current instanceof NavigationEnd) {
          return previous.url === current.url;
      }
      return true;
  }).filter(x => {
    if(config.routesToIgnore == null) {
      return true;
    }
    else{
      for(let routesIndex = 0;routesIndex < config.routesToIgnore.length; routesIndex++ ){
        let routeIgnore : boolean = config.routesToIgnore[routesIndex].test(x.url)
        if(routeIgnore) {
          return false;
        }
      }
      return true;
    }
  })
    .subscribe((x: any) => { 
    gtag('config', config.gaTrackingId, {'page_path': x.url});
  });
  }

}
