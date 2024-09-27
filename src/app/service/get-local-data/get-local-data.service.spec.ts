import { TestBed } from '@angular/core/testing';

import { GetLocalDataService } from './get-local-data.service';

describe('GetLocalDataService', () => {
  let service: GetLocalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLocalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
