import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAgentExamComponent } from './course-agent-exam.component';

describe('CourseAgentExamComponent', () => {
  let component: CourseAgentExamComponent;
  let fixture: ComponentFixture<CourseAgentExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAgentExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAgentExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
