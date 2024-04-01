import { Detail } from "../interface/detail";
import { Product } from "../interface/product";

export class Node implements Detail, Product {
  weight: number;
  material: string;
  cost: number;

  constructor(weight: number, material: string, cost: number) {
      this.weight = weight;
      this.material = material;
      this.cost = cost;
  }

  get_weight(): number {
      return this.weight;
  }

  get_material(): string {
      return this.material;
  }

  assemble(): void {
      console.log("Assembling node...");
  }

  get_cost(): number {
      return this.cost;
  }
  showInfo(): void {
    console.log(`Node: weight=${this.weight}, material=${this.material}, cost=${this.cost}`);
  }
}
