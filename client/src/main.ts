import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

import 'materialize-css/dist/js/materialize.js'
import 'jquery-form-styler/dist/jquery.formstyler.min.js'
import '@rateyo/jquery/lib/es/jquery.rateyo.js'
import 'slick-carousel/slick/slick.js'
import 'node_modules/ion-rangeslider/js/ion.rangeSlider.js'
import 'jquery/dist/jquery.js'

if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err))
