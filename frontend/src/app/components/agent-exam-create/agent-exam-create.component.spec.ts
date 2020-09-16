import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentExamCreateComponent } from './agent-exam-create.component';

describe('AgentExamCreateComponent', () => {
  let component: AgentExamCreateComponent;
  let fixture: ComponentFixture<AgentExamCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentExamCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentExamCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
