import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodMainComponent } from './hod-main.component';

describe('HodMainComponent', () => {
  let component: HodMainComponent;
  let fixture: ComponentFixture<HodMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
