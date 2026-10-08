export interface CalculatorState {
  units: number;
  ratePerUnit: number;
  total: number | null;
  setUnits: (units: number) => void;
  setRatePerUnit: (ratePerUnit: number) => void;
  calculateTotal: () => void;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}