import { Mechanism } from "./mechanism";

describe('Mechanism', () => {
    it('should create Mechanism instance', () => {
        const mechanism = new Mechanism(10, 'steel', 100);
        expect(mechanism).toBeTruthy();
        expect(mechanism.weight).toEqual(10);
        expect(mechanism.material).toEqual('steel');
        expect(mechanism.cost).toEqual(100);
    });

    it('should assemble Mechanism', () => {
        const mechanism = new Mechanism(10, 'steel', 100);
        spyOn(console, 'log');
        mechanism.assemble();
        expect(console.log).toHaveBeenCalledWith("Assembling mechanism...");
    });

    it('should get cost of Mechanism', () => {
        const mechanism = new Mechanism(10, 'steel', 100);
        expect(mechanism.get_cost()).toEqual(100);
    });
    it('should show correct information for Mechanism', () => {
        const mechanism = new Mechanism(10, 'steel', 100);
        spyOn(console, 'log');
        mechanism.showInfo();
        expect(console.log).toHaveBeenCalledWith('Mechanism: weight=10, material=steel, cost=100');
      });
});