import { TestBed } from '@angular/core/testing';

import { LlajtaMarketService } from './llajta-market.service';

describe('LlajtaMarketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LlajtaMarketService = TestBed.get(LlajtaMarketService);
    expect(service).toBeTruthy();
  });
});
