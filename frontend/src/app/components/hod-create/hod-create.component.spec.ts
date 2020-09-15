import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodCreateComponent } from './hod-create.component';

describe('HodCreateComponent', () => {
  let component: HodCreateComponent;
  let fixture: ComponentFixture<HodCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
