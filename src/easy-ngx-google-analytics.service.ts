import { EasyAnalyticsConfig } from './easy-analytics.config';

import { Optional, Injectable } from '@angular/core';

@Injectable()
export class EasyNgxGoogleAnalyticsService {

  constructor(@Optional() private config: EasyAnalyticsConfig) {
  }

  getConfig() : EasyAnalyticsConfig {
    return this.config;
  }
}
