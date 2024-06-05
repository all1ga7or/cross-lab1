import { Factory } from './factory';

describe('Factory', () => {
    it('should create an instance of Factory', () => {
        const factory = new Factory('Factory1', 100, 5);
        expect(factory).toBeTruthy();
        expect(factory.name).toBe('Factory1');
        expect(factory.height).toBe(100);
        expect(factory.G).toBe(5);
    });

    it('should throw an error if height is negative', () => {
        expect(() => new Factory('Factory1', -100, 5)).toThrowError("Height must be a non-negative number.");
    });

    it('should return the correct show message', () => {
        const factory = new Factory('Factory1', 100, 5);
        const message = factory.show();
        expect(message).toContain('Це фабрика Factory1. Кількість цехів: 5.');
    });

    it('should set the correct foundation height', () => {
        const factory = new Factory('Factory1', 100, 5);
        factory.foundationHeight();
        expect(factory.height).toBe(10); // 0.000002 * 5
    });
});
