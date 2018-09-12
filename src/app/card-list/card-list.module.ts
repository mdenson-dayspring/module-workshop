import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { CoreModule } from '../core/core.module';
import { CardContentComponent } from './card-content/card-content.component';
import { CardTitleComponent } from './card-title/card-title.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: [CardListComponent, CardComponent, CardContentComponent, CardTitleComponent],
  exports: [CardListComponent, CardComponent, CardContentComponent, CardTitleComponent]
})
export class CardListModule { }
