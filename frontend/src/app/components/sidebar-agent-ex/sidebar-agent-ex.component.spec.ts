import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAgentEXComponent } from './sidebar-agent-ex.component';

describe('SidebarAgentEXComponent', () => {
  let component: SidebarAgentEXComponent;
  let fixture: ComponentFixture<SidebarAgentEXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarAgentEXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAgentEXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
