import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import the Animations module as kendo ui depends on it.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import kendo ui modules
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
