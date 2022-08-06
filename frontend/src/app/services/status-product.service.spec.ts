import { TestBed } from '@angular/core/testing';

import { StatusProductService } from './status-product.service';

describe('StatusProductService', () => {
  let service: StatusProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
