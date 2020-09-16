import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentScolariteEditComponent } from './agent-scolarite-edit.component';

describe('AgentScolariteEditComponent', () => {
  let component: AgentScolariteEditComponent;
  let fixture: ComponentFixture<AgentScolariteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentScolariteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentScolariteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
