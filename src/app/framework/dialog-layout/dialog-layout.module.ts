import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogLayoutComponent } from './dialog-layout.component';
import { HeaderModule } from '../header/header.module';
import { ContentAreaModule } from '../content-area/content-area.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    ContentAreaModule
  ],
  declarations: [DialogLayoutComponent],
  exports: [DialogLayoutComponent]
})
export class DialogLayoutModule { }
