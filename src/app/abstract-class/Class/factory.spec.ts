import { Factory } from "./factory";
describe('Factory', () => {
    let factory: Factory;
  
    beforeEach(() => {
      factory = new Factory('Factory 1', 0, 5);
    });
  
    it('should create an instance', () => {
      expect(factory).toBeTruthy();
    });
  
    it('should calculate foundation height correctly', () => {
      factory.foundationHeight();
      expect(factory.height).toEqual(0.000002 * factory.G);
    });
  
    it('should override show method correctly', () => {
      const expectedOutput = `Це фабрика Factory 1. Кількість цехів: 5. \nЦе будівля Factory 1. Висота: 0`;
      expect(factory.show()).toEqual(expectedOutput);
    });

    it('Factory with Negative Parameter', () => {
      expect(()=> new Factory ("Factory  2", 0, -5)).toThrow(new Error("Height must be a non-negative number"));
    });
  });