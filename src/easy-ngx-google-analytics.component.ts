import { Component } from '@angular/core';
import { EasyNgxGoogleAnalyticsService } from './easy-ngx-google-analytics.service';
import {Router, NavigationEnd} from '@angular/router';
import 'rxjs/add/operator/distinctUntilChanged';

declare var ga:any;

@Component({
  selector: 'easy-ngx-google-analytics',
  template: `
    <h1>EasyNgxGoogleAnalyticsComponent</h1>
    <h2>{{message}}</h2>
  `
})
export class EasyNgxGoogleAnalyticsComponent {

  public message: string;

  constructor(
    private service: EasyNgxGoogleAnalyticsService
    , private router: Router
  ) {
    let config = this.service.getConfig();
    router.events.distinctUntilChanged((previous: any, current: any) => {
      if(current instanceof NavigationEnd) {
          return previous.url === current.url;
      }
      return true;
  }).subscribe((x: any) => {
    ga('set', 'page',  x.url);
    ga('send', 'pageview');
  });
  }

}
