import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2Component } from './home2.component';

describe('HomeComponent', () => {
  let component: Home2Component;
  let fixture: ComponentFixture<Home2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Home2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
