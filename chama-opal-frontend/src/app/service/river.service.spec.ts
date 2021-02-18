import { TestBed } from '@angular/core/testing';

import { RiverService } from './river.service';

describe('RiverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RiverService = TestBed.get(RiverService);
    expect(service).toBeTruthy();
  });
});
