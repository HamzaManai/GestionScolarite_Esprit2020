import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentScolariteListComponent } from './agent-scolarite-list.component';

describe('AgentScolariteListComponent', () => {
  let component: AgentScolariteListComponent;
  let fixture: ComponentFixture<AgentScolariteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentScolariteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentScolariteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
