import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-layout',
  templateUrl: './dialog-layout.component.html',
  styleUrls: ['./dialog-layout.component.scss']
})
export class DialogLayoutComponent implements OnInit {
  @Input() title: string;
  @Output() close: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onMainButtonClick() {
    this.close.emit(1);
  }

}
