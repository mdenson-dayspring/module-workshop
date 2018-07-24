import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  links = Array.from({length: 10}, (_, i) => {
    return {
      title: 'Nav Item ' + (i + 1)
    }
  });

  constructor() { }

  ngOnInit() {
  }

}
