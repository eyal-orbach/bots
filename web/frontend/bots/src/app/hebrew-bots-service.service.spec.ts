import { TestBed } from '@angular/core/testing';

import { HebrewBotsServiceService } from './hebrew-bots-service.service';

describe('HebrewBotsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HebrewBotsServiceService = TestBed.get(HebrewBotsServiceService);
    expect(service).toBeTruthy();
  });
});
