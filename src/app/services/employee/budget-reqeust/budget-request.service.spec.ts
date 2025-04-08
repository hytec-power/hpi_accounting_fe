import { TestBed } from '@angular/core/testing';

import { BudgetRequestService } from './budget-request.service';

describe('BudgetRequestService', () => {
  let service: BudgetRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
