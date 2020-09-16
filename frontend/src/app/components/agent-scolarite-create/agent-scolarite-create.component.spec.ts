import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentScolariteCreateComponent } from './agent-scolarite-create.component';

describe('AgentScolariteCreateComponent', () => {
  let component: AgentScolariteCreateComponent;
  let fixture: ComponentFixture<AgentScolariteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentScolariteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentScolariteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
