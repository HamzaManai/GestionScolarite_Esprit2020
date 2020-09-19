import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAgentSCComponent } from './sidebar-agent-sc.component';

describe('SidebarAgentSCComponent', () => {
  let component: SidebarAgentSCComponent;
  let fixture: ComponentFixture<SidebarAgentSCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarAgentSCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAgentSCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
