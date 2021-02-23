import { TestBed } from '@angular/core/testing';

import { DrumsService } from './drums.service';

describe('DrumsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrumsService = TestBed.get(DrumsService);
    expect(service).toBeTruthy();
  });
});
