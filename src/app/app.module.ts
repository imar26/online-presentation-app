import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularDraggableModule } from 'angular2-draggable';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlideAreaComponent } from './slide-area/slide-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlideAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
