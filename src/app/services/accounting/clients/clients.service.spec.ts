import { TestBed } from '@angular/core/testing';

import { ClientsService } from 'src/app/services/accounting/clients/clients.service';

describe('ClientsService', () => {
  let service: ClientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
