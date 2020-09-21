import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassEnrollStudentComponent } from './class-enroll-student.component';

describe('ClassEnrollStudentComponent', () => {
  let component: ClassEnrollStudentComponent;
  let fixture: ComponentFixture<ClassEnrollStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassEnrollStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassEnrollStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
