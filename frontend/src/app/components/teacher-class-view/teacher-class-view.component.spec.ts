import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherClassViewComponent } from './teacher-class-view.component';

describe('TeacherClassViewComponent', () => {
  let component: TeacherClassViewComponent;
  let fixture: ComponentFixture<TeacherClassViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherClassViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherClassViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
