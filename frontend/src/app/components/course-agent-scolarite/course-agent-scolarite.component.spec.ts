import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAgentScolariteComponent } from './course-agent-scolarite.component';

describe('CourseAgentScolariteComponent', () => {
  let component: CourseAgentScolariteComponent;
  let fixture: ComponentFixture<CourseAgentScolariteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAgentScolariteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAgentScolariteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
