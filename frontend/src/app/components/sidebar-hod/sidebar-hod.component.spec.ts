import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarHodComponent } from './sidebar-hod.component';

describe('SidebarHodComponent', () => {
  let component: SidebarHodComponent;
  let fixture: ComponentFixture<SidebarHodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarHodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarHodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
