import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentAreaComponent } from './content-area.component';
import { NavigationModule } from '../navigation/navigation.module';
import { CoreModule } from '../../core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    CoreModule,
    MatCardModule,
    MatSidenavModule,
    NavigationModule
  ],
  declarations: [
    ContentAreaComponent
  ],
  exports: [
    ContentAreaComponent
  ]
})
export class ContentAreaModule { }
