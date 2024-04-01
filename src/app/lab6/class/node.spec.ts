import { Node } from './node';

describe('Node', () => {
  it('should create Node instance', () => {
      const node = new Node(5, 'aluminum', 50);
      expect(node).toBeTruthy();
      expect(node.weight).toEqual(5);
      expect(node.material).toEqual('aluminum');
      expect(node.cost).toEqual(50);
  });

  it('should assemble Node', () => {
      const node = new Node(5, 'aluminum', 50);
      spyOn(console, 'log');
      node.assemble();
      expect(console.log).toHaveBeenCalledWith("Assembling node...");
  });

  it('should get cost of Node', () => {
      const node = new Node(5, 'aluminum', 50);
      expect(node.get_cost()).toEqual(50);
  });
  it('should show correct information for Node', () => {
    const node = new Node(5, 'plastic', 50);
    spyOn(console, 'log');
    node.showInfo();
    expect(console.log).toHaveBeenCalledWith('Node: weight=5, material=plastic, cost=50');
  });
});