# easy-ngx-google-analytics
[![Build Status](https://travis-ci.org/sharukworld/easy-ngx-google-analytics.svg?branch=master)](https://travis-ci.org/sharukworld/easy-ngx-google-analytics)
![Li](https://img.shields.io/npm/l/easy-ngx-google-analytics.svg) [![Join the chat at https://gitter.im/easy-ngx-google-analytics/Lobby](https://badges.gitter.im/easy-ngx-google-analytics/Lobby.svg)](https://gitter.im/easy-ngx-google-analytics/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


> Easy Ngx Google Analytics Angular Module

###### This module used the latest Global Site Tag (gtag.js).

## prerequisite
[Generates a google analytics tracking ID](https://support.google.com/analytics/answer/1042508)
## Installation

```shell
npm install easy-ngx-google-analytics --save
```

install gtag.js by copying the following snippet and pasting it immediately after the head tag on index.html. Replace GA_TRACKING_ID with the tracking ID of the Google Analytics property you want to send data to.
```html
<!doctype html>
<html lang="en">
<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_TRACKING_ID', { 'send_page_view': false });
    </script>
  <meta charset="utf-8">
  <title>MyModuleTestApp</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```
  
Add below code to your app module.
Next we import the EasyNgxGoogleAnalyticsModule to app module

```ts
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Wr import the EasyNgxGoogleAnalyticsModule
import { EasyNgxGoogleAnalyticsModule} from 'easy-ngx-google-analytics';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: '1', component: AppComponent },
  { path: '2', component: AppComponent }

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // import the module here
    EasyNgxGoogleAnalyticsModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


```
Finally, we add the code below to inside our app.component.ts(our initial template).
```import { EasyAnalyticsConfig } from 'easy-ngx-google-analytics';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // here we configure the analytic module
  template: `<easy-ngx-google-analytics [config] = 'easyAnalyticsConfig'></easy-ngx-google-analytics>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  easyAnalyticsConfig: EasyAnalyticsConfig = {
  
    // required field, same as the GA_TRACKING_ID
    gaTrackingId : 'UA-XXXXXXXXX-X',
    // If you have any routes you need to ignore, update the config
    // you can add a regex array
    // Here we will add /loading to ignore list
    routesToIgnore : [/\/loading$/],
    
    // you can pass a function/arrow function to remove or add information from the url
    // sometime, we might need to remove the id, or authenticating keys.
    urlTrimmerFunction: (originalUrl: string) => {
      originalUrl = originalUrl.replace(/\d/, '');
      return originalUrl;
    }
  };
}
```
## Future Upgrades
Adding events and custom trigger directive.

## Support
Chat with us on  [![Join the chat at https://gitter.im/easy-ngx-google-analytics/Lobby](https://badges.gitter.im/easy-ngx-google-analytics/Lobby.svg)](https://gitter.im/easy-ngx-google-analytics/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## SystemJs
If you use SystemJS to load your files, you might have to update your config with this if you don't use `defaultJSExtensions: true`:
```js
System.config({
    packages: {
        "/easy-ngx-google-analytics": {"defaultExtension": "js"}
    }
});
```


## License

MIT


