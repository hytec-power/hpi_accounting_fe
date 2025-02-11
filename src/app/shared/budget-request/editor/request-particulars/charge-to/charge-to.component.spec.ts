import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeToComponent } from './charge-to.component';

describe('ChargeToComponent', () => {
  let component: ChargeToComponent;
  let fixture: ComponentFixture<ChargeToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChargeToComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargeToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
