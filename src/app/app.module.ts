import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
import {SqrtPipe} from '../app/dropdown/sqrt.app';
import { TestComponent } from './test/test.component'
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DatepickerComponent,
    SqrtPipe,DropdownComponent, TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgxDaterangepickerMd.forRoot(),FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
