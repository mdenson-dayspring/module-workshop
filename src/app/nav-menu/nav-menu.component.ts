import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  links = Array.from({ length: 10 }, (_, i) => {
    return {
      title: 'Nav Item ' + (i + 1)
    };
  });

  constructor() { }

  ngOnInit() {
  }

}
