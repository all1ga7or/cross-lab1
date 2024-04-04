import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatePolyService {

  constructor() { }
  calculatePoly(coefs: number[], x: number): number {
    let result = 0;
    for (let i = 0; i < coefs.length; i++) {
      result += coefs[i] * Math.pow(x, coefs.length - i - 1);
    }
    return result;
  }
}
