import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingdetailsComponent } from './chargingdetails.component';

describe('ChargingdetailsComponent', () => {
  let component: ChargingdetailsComponent;
  let fixture: ComponentFixture<ChargingdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChargingdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
