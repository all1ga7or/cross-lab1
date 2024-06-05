import { Office } from "./office";
describe('Office', () => {
    let office: Office;
  
    beforeEach(() => {
      office = new Office('Office 1', 0, 3);
    });
  
    it('should create an instance', () => {
      expect(office).toBeTruthy();
    });
  
    it('should calculate foundation height correctly', () => {
      office.foundationHeight();
      expect(office.height).toEqual(0.05 * office.N);
    });
  
    it('should override show method correctly', () => {
      const expectedOutput = `Це офіс Office 1. Кількість поверхів: 3\nЦе будівля Office 1. Висота: 0`;
      expect(office.show()).toEqual(expectedOutput);
    });
    it('Office with Negative Parameter', () => {
      expect(()=> new Office ("Office  2", -5, 2)).toThrow(new Error("Height must be a non-negative number."));
    });
  });