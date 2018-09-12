import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards = Array.from({length: 10}, (_, i) => {
    return {
      title: 'Content ' + (i + 1),
      text: 'Lorem ipsum dolor sit amet, consectetur.'
    };
  });

  title = 'app';
}
