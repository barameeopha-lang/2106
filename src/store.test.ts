import { describe, it, expect } from 'vitest';
import { useCalculatorStore } from './store';

describe('Calculator Store Test', () => {
  it('คำนวณค่าไฟฟ้าถูกต้อง (100 หน่วย * 4 บาท = 400 บาท)', () => {
    const store = useCalculatorStore.getState();
    store.setUnits(100);
    store.setRatePerUnit(4);
    store.calculateTotal();

    expect(useCalculatorStore.getState().total).toBe(400);
  });
});