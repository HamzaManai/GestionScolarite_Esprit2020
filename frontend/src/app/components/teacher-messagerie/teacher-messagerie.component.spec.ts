import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherMessagerieComponent } from './teacher-messagerie.component';

describe('TeacherMessagerieComponent', () => {
  let component: TeacherMessagerieComponent;
  let fixture: ComponentFixture<TeacherMessagerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherMessagerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherMessagerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
