import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComplainComponent } from './student-complain.component';

describe('StudentComplainComponent', () => {
  let component: StudentComplainComponent;
  let fixture: ComponentFixture<StudentComplainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentComplainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
