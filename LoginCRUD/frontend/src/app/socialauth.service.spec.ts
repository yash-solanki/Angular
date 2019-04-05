import { TestBed } from '@angular/core/testing';

import { SocialauthService } from './socialauth.service';

describe('SocialauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialauthService = TestBed.get(SocialauthService);
    expect(service).toBeTruthy();
  });
});
