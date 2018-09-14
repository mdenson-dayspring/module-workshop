import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullLayoutComponent } from './full-layout.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { ContentAreaModule } from '../content-area/content-area.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    ContentAreaModule
  ],
  declarations: [FullLayoutComponent],
  exports: [FullLayoutComponent]
})
export class FullLayoutModule { }
