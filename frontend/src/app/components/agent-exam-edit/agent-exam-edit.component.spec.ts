import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentExamEditComponent } from './agent-exam-edit.component';

describe('AgentExamEditComponent', () => {
  let component: AgentExamEditComponent;
  let fixture: ComponentFixture<AgentExamEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentExamEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentExamEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
