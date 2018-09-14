import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './framework/header/header.module';
import { FooterModule } from './framework/footer/footer.module';
import { ContentAreaModule } from './framework/content-area/content-area.module';
import { CardListModule } from './card-list/card-list.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { DialogLayoutModule } from './framework/dialog-layout/dialog-layout.module';
import { FullLayoutModule } from './framework/full-layout/full-layout.module';
import { NavMenuModule } from './nav-menu/nav-menu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule,
    ContentAreaModule,
    CardListModule,

    MatGridListModule,

    DialogLayoutModule,

    FullLayoutModule,

    NavMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
