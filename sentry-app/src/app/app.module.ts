import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdTabsModule, MdCardModule, MdInputModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { SiteDetailsFormComponent } from './site-details-form/site-details-form.component';
import { TechnicianInformationComponent } from './technician-information/technician-information.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteDetailsFormComponent,
    TechnicianInformationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdTabsModule,
    MdCardModule,
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
