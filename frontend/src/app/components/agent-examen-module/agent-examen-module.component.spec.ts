import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentExamenModuleComponent } from './agent-examen-module.component';

describe('AgentExamenModuleComponent', () => {
  let component: AgentExamenModuleComponent;
  let fixture: ComponentFixture<AgentExamenModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentExamenModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentExamenModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
