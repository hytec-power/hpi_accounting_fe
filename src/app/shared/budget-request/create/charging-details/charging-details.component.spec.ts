import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingDetailsComponent } from './charging-details.component';

describe('ChargingDetailsComponent', () => {
  let component: ChargingDetailsComponent;
  let fixture: ComponentFixture<ChargingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChargingDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
