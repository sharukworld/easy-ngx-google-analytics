import { NgModule } from '@angular/core';

import { EasyNgxGoogleAnalyticsService } from './easy-ngx-google-analytics.service';
import { EasyNgxGoogleAnalyticsComponent } from './easy-ngx-google-analytics.component';


export function asyncLocalStorageFactory() {
  return new EasyNgxGoogleAnalyticsService();
}

@NgModule({
  declarations: [
    EasyNgxGoogleAnalyticsComponent,
  ],
  exports: [
    EasyNgxGoogleAnalyticsComponent,
  ],
  providers: [
    {
      provide: EasyNgxGoogleAnalyticsService,
      useFactory: asyncLocalStorageFactory
    }
  ]
})
export class EasyNgxGoogleAnalyticsModule {
}
