import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentScolariteMessagerieComponent } from './agent-scolarite-messagerie.component';

describe('AgentScolariteMessagerieComponent', () => {
  let component: AgentScolariteMessagerieComponent;
  let fixture: ComponentFixture<AgentScolariteMessagerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentScolariteMessagerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentScolariteMessagerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
