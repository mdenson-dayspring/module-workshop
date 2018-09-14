import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() leftnav = 'menu';
  @Input() color = 'primary';
  @Output() mainButtonClick: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.mainButtonClick.emit(1);
  }
}
