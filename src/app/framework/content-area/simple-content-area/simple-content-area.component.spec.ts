import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleContentAreaComponent } from './simple-content-area.component';

describe('SimpleContentAreaComponent', () => {
  let component: SimpleContentAreaComponent;
  let fixture: ComponentFixture<SimpleContentAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleContentAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleContentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
