import { TestBed } from '@angular/core/testing';

import { EmpDetailsService } from './emp-details.service';

describe('EmpDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpDetailsService = TestBed.get(EmpDetailsService);
    expect(service).toBeTruthy();
  });
});
