import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.scss']
})
export class ContentAreaComponent implements OnInit, OnChanges {
  @Input() trigger: number;
  @ViewChild('sidebar', {read: MatSidenav}) sidebarEl: MatSidenav;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.trigger && !changes.trigger.firstChange) {
      this.sidebarEl.opened = !this.sidebarEl.opened;
    }
  }
  ngOnInit() {
  }

}
