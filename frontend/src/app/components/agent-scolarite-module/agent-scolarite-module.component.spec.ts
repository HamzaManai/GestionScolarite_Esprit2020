import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentScolariteModuleComponent } from './agent-scolarite-module.component';

describe('AgentScolariteModuleComponent', () => {
  let component: AgentScolariteModuleComponent;
  let fixture: ComponentFixture<AgentScolariteModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentScolariteModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentScolariteModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
