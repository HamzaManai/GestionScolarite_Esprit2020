import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentExamMainComponent } from './agent-exam-main.component';

describe('AgentExamMainComponent', () => {
  let component: AgentExamMainComponent;
  let fixture: ComponentFixture<AgentExamMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentExamMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentExamMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
