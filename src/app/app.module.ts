import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { RouterOutlet } from '@angular/router';
import { SlideshowModule } from './slideshow/slideshow.module';
import { TailwindcssModule } from './slides/tailwindcss/tailwindcss.module';
import { CypressModule } from './slides/cypress/cypress.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    SlideshowModule,
    TailwindcssModule,
    CypressModule,
    RouterOutlet,
    MatSnackBarModule,
  ],
})
export class AppModule {}
