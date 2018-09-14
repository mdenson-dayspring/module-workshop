import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {
  @Input() title: string;
  clickCount = 0;

  constructor() { }

  ngOnInit() {
  }

  onMainButtonClick() {
    this.clickCount++;
  }
}
