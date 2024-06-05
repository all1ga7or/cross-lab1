import { House } from "./house";
describe('House', () => {
    let house: House;
  
    beforeEach(() => {
      house = new House('House 1', 0, 3);
    });
  
    it('should create an instance', () => {
      expect(house).toBeTruthy();
    });
  
    it('should calculate foundation height correctly', () => {
      house.foundationHeight();
      expect(house.height).toEqual(0.1 * house.floors);
    });
  
    it('should override show method correctly', () => {
      const expectedOutput = 'Це житловий будинок House 1. Кількість поверхів: 3\nЦе будівля House 1. Висота: 0';
      expect(house.show()).toEqual(expectedOutput);
    });
    it('House with Negative Parameter', () => {
      expect(() => new House ("House  2", -2, 1)).toThrow(new Error("Height must be a non-negative number."));
    });
  });