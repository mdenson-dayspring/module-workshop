import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.scss']
})
export class ContentAreaComponent implements OnInit {

  cards = Array.from({length: 10}, (_, i) => {
    return {
      title: 'Content ' + (i + 1),
      text: 'Lorem ipsum dolor sit amet, consectetur.'
    }
  });

  constructor() { }

  ngOnInit() {
  }

}
