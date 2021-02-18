import { TestBed } from '@angular/core/testing';

import { RiverSectionService } from './river-section.service';

describe('RiverSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RiverSectionService = TestBed.get(RiverSectionService);
    expect(service).toBeTruthy();
  });
});
