import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodComplainViewComponent } from './hod-complain-view.component';

describe('HodComplainViewComponent', () => {
  let component: HodComplainViewComponent;
  let fixture: ComponentFixture<HodComplainViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodComplainViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodComplainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
