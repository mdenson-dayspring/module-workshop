import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatListModule
  ],
  declarations: [NavMenuComponent],
  exports: [NavMenuComponent]
})
export class NavMenuModule { }
