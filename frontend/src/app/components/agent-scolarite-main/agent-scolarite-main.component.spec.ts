import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentScolariteMainComponent } from './agent-scolarite-main.component';

describe('AgentScolariteMainComponent', () => {
  let component: AgentScolariteMainComponent;
  let fixture: ComponentFixture<AgentScolariteMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentScolariteMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentScolariteMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
