import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentExamListComponent } from './agent-exam-list.component';

describe('AgentExamListComponent', () => {
  let component: AgentExamListComponent;
  let fixture: ComponentFixture<AgentExamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentExamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentExamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
