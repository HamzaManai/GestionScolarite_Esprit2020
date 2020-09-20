import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodCourseValidComponent } from './hod-course-valid.component';

describe('HodCourseValidComponent', () => {
  let component: HodCourseValidComponent;
  let fixture: ComponentFixture<HodCourseValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodCourseValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodCourseValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
