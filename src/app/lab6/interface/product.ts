export interface Product {
  cost: number;

  assemble(): void;
  get_cost(): number;
  showInfo(): void;
}