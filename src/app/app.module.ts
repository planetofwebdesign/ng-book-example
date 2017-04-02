import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormSkuComponent } from './form-sku/form-sku.component';
import { SkuFormValidationComponent } from './sku-form-validation/sku-form-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSkuComponent,
    SkuFormValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
