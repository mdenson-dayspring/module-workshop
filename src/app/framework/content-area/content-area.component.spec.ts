import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAreaComponent } from './content-area.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '../../core/core.module';
import { MatListModule } from '@angular/material/list';
import { NavigationModule } from '../navigation/navigation.module';

describe('ContentAreaComponent', () => {
  let component: ContentAreaComponent;
  let fixture: ComponentFixture<ContentAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ContentAreaComponent
      ],
      imports: [
        BrowserModule,
        CoreModule,
        NavigationModule,
        MatCardModule,
        MatSidenavModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
