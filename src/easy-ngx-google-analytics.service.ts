import { EasyAnalyticsConfig } from './EasyAnalyticsConfig';
import { Optional, Injectable } from '@angular/core';

@Injectable()
export class EasyNgxGoogleAnalyticsService {

  constructor(@Optional() private config: EasyAnalyticsConfig) {
  }

  getConfig() {
    return this.config;
  }
}
