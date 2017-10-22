import { EasyAnalyticsConfig } from './EasyAnalyticsConfig';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { EasyNgxGoogleAnalyticsService } from './easy-ngx-google-analytics.service';
import { EasyNgxGoogleAnalyticsComponent } from './easy-ngx-google-analytics.component';


@NgModule({
  declarations: [
    EasyNgxGoogleAnalyticsComponent,
  ],
  exports: [
    EasyNgxGoogleAnalyticsComponent,
  ],
  providers: [
   EasyNgxGoogleAnalyticsService
  ]
})
export class EasyNgxGoogleAnalyticsModule {
  static forRoot(config: EasyAnalyticsConfig): ModuleWithProviders {
    return {
      ngModule: EasyNgxGoogleAnalyticsModule,
      providers: [
        {provide: EasyAnalyticsConfig, useValue: config }
      ]
    };
  }
}
