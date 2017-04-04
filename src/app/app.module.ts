import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { 
  HttpModule,
  Http
 } from '@angular/http';

import { AppComponent } from './app.component';
import { FormSkuComponent } from './form-sku/form-sku.component';
import { SkuFormValidationComponent } from './sku-form-validation/sku-form-validation.component';
import { UserAnalyticsComponent } from './user-analytics/user-analytics.component';

import {
  Matric,
  AnalyticsInterface
} from './user-analytics/user-analytics.interface';

import { AnalyticsService } from './services/analytics.service';
import { HttpModuleComponent } from './http-module/http-module.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import { youTubeSearchInjectables } from './youtube-search/you-tube-search.injectables';

@NgModule({
  declarations: [
    AppComponent,
    FormSkuComponent,
    SkuFormValidationComponent,
    UserAnalyticsComponent,
    HttpModuleComponent,
    YoutubeSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [youTubeSearchInjectables,

    {provide: 'API_URL' , useValue: 'http://test.service.com'},

    {
      provide: AnalyticsService,

      deps:[Http, 'API_URL'],

      useFactory(http: Http, apiUrl: string) {

        const impl: AnalyticsInterface = {
         /* recordEvent: (metric: Matric): void => {
            console.log('The metric is:', metric);
            console.log('Sending to: ', apiUrl);
            // ... You'd send the metric using http here ...
          }*/

          recordEvent: (matric: Matric): void => {
            console.log("This event has been logged : ", matric);
            console.log('Sending to: ', apiUrl);
          }
        };

        return new AnalyticsService(impl);
      }
    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
