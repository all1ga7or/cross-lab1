import { TestBed } from '@angular/core/testing';
import { CalculatePolyService } from './calculate-poly.service';

describe('CalculatePolyService', () => {
  let service: CalculatePolyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatePolyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate polynomial correctly', () => {
    const coefs = [1, 2, 3]; 
    const x = 2;
    const expectedResult = 11; 

    const result = service.calculatePoly(coefs, x);

    expect(result).toEqual(expectedResult);
  });

  it('should return 0 when coefficients array is empty', () => {
    const coefs: number[] = []; 
    const x = 2; 
    const expectedResult = 0; 

    const result = service.calculatePoly(coefs, x);

    expect(result).toEqual(expectedResult);
  });

  it('should return 0 when x is 0 for any coefficients', () => {
    const coefs = [1, 2, 3]; 
    const x = 0; 
    const expectedResult = 3; 

    const result = service.calculatePoly(coefs, x);

    expect(result).toEqual(expectedResult);
  });
});
