import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementhodComponent  } from './Paiement-hod.component';

describe('PaiementhodComponent ', () => {
  let component: PaiementhodComponent ;
  let fixture: ComponentFixture<PaiementhodComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiementhodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementhodComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
