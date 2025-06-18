import { TestBed } from '@angular/core/testing';

import { PagedService } from './paged.service';

describe('PagedService', () => {
  let service: PagedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
