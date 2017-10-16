export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/easy-ngx-google-analytics.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.EasyNgxGoogleAnalytics',
  globals: {
     '@angular/core': 'ng.core',
     '@angular/router' : 'ng.router'
  }
}
