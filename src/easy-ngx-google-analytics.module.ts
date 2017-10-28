import { EasyAnalyticsConfig } from './easy-analytics.config';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EasyNgxGoogleAnalyticsComponent } from './easy-ngx-google-analytics.component';


@NgModule({
  declarations: [
    EasyNgxGoogleAnalyticsComponent,
  ],
  exports: [
    EasyNgxGoogleAnalyticsComponent,
  ]
})
export class EasyNgxGoogleAnalyticsModule {
}
