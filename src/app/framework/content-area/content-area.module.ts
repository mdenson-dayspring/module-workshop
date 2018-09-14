import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentAreaComponent } from './content-area.component';
import { CoreModule } from '../../core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SimpleContentAreaComponent } from './simple-content-area/simple-content-area.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    CoreModule,
    MatCardModule,
    MatSidenavModule
  ],
  declarations: [
    ContentAreaComponent,
    SimpleContentAreaComponent
  ],
  exports: [
    ContentAreaComponent,
    SimpleContentAreaComponent
  ]
})
export class ContentAreaModule { }
