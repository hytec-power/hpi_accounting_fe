import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetRequestsComponent } from './budget-requests.component';

describe('BudgetRequestsComponent', () => {
  let component: BudgetRequestsComponent;
  let fixture: ComponentFixture<BudgetRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
