import { TestBed } from '@angular/core/testing';

import { UxApiService } from './ux-api.service';

describe('UxApiService', () => {
  let service: UxApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UxApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
