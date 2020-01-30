import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MatButtonModule} from '@angular/material/button';
import{MaterialModule} from './material-module'

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ,MatButtonModule,MaterialModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
