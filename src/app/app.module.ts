import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './framework/header/header.module';
import { FooterModule } from './framework/footer/footer.module';
import { ContentAreaModule } from './framework/content-area/content-area.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule,
    ContentAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
