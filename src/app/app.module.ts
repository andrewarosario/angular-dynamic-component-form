import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';

@NgModule({
  imports: [BrowserModule, DynamicFormModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
