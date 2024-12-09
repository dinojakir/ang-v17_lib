import { TestBed } from '@angular/core/testing';

import { AngV17LibService } from './ang-v17-lib.service';

describe('AngV17LibService', () => {
  let service: AngV17LibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngV17LibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
