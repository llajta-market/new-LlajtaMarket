import { TestBed } from '@angular/core/testing';

import { FielService } from './fiel.service';

describe('FielService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FielService = TestBed.get(FielService);
    expect(service).toBeTruthy();
  });
});
