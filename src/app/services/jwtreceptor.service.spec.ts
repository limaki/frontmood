import { TestBed } from '@angular/core/testing';

import { JwtreceptorService } from './jwtreceptor.service';

describe('JwtreceptorService', () => {
  let service: JwtreceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtreceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
