import { TestBed } from '@angular/core/testing';

import { ServiceRoleSelectorService } from './service-role-selector.service';

describe('ServiceRoleSelectorService', () => {
  let service: ServiceRoleSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRoleSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
