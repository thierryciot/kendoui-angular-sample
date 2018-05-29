import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import the Animations module as kendo ui depends on it.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import kendo ui modules
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule,
    GridModule,
    DropDownsModule,
    FormsModule             /* Need to include this otherwise get error Can't bind to 'ngModel' since it isn't a known property of 'kendo-multiselect' */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
