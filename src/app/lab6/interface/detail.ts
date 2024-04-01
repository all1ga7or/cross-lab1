export interface Detail {
  weight: number;
  material: string;

  get_weight(): number;
  get_material(): string;
  showInfo(): void;
}