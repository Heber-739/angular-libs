import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // const _api = 'AIzaSyBh581dLrxyvTrZfJMGdzsOIba84F9VECk';
// url :   'https://youtube.googleapis.com/youtube/v3/channels?part=id%2Csnippet%2CcontentDetails&id=UCu7C-xAH7xBjQxI03o2UknA&key=[YOUR_API_KEY]' \
// id: AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8

