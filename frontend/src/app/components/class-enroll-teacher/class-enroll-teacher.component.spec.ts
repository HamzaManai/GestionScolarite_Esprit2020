import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassEnrollTeacherComponent } from './class-enroll-teacher.component';

describe('ClassEnrollTeacherComponent', () => {
  let component: ClassEnrollTeacherComponent;
  let fixture: ComponentFixture<ClassEnrollTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassEnrollTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassEnrollTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
