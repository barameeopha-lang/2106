import { create } from 'zustand';
import type { CalculatorState } from './types';

export const useCalculatorStore = create<CalculatorState>((set, get) => ({
  units: 0,
  ratePerUnit: 0,
  total: null,
  setUnits: (units) => set({ units }),
  setRatePerUnit: (ratePerUnit) => set({ ratePerUnit }),
  calculateTotal: () => {
    const { units, ratePerUnit } = get();
    set({ total: units * ratePerUnit });
  },
}));