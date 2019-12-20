import { TestBed } from '@angular/core/testing';

import { MidataService } from './midata.service';

describe('MidataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MidataService = TestBed.get(MidataService);
    expect(service).toBeTruthy();
  });
});
