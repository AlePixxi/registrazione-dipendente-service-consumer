import { TestBed } from '@angular/core/testing';

import { RegistrazioneDipendenteService } from './registrazione-dipendente.service';

describe('DipendenteService', () => {
  let service: RegistrazioneDipendenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrazioneDipendenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
