import { TestBed } from '@angular/core/testing';

import { OtoService } from './oto.service';

describe('OtoService', () => {
  let service: OtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
