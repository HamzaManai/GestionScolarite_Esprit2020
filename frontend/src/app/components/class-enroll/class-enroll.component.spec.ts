import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassEnrollComponent } from './class-enroll.component';

describe('ClassEnrollComponent', () => {
  let component: ClassEnrollComponent;
  let fixture: ComponentFixture<ClassEnrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassEnrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
