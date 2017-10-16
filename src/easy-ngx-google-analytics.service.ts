import { Injectable } from '@angular/core';

@Injectable()
export class EasyNgxGoogleAnalyticsService {

  constructor(
  ) {
    console.log('EasyNgxGoogleAnalyticsService constructor')
  }

  getMessage() {
    return 'Hello from the EasyNgxGoogleAnalyticsService!'
  }
}
