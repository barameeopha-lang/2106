import { InputNumber, Button, Card } from 'antd';
import { useCalculatorStore } from '../store';

export default function Calculate() {
  const { units, ratePerUnit, total, setUnits, setRatePerUnit, calculateTotal } = useCalculatorStore();

  return (
    <Card title="คำนวณค่าไฟฟ้า" style={{ maxWidth: 400, margin: '0 auto' }}>
      <div style={{ marginBottom: 16 }}>
        <label>จำนวนหน่วยที่ใช้: </label>
        <InputNumber
          value={units}
          onChange={(val) => setUnits(val || 0)}
          style={{ width: '100%', marginTop: 8 }}
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>ค่าไฟต่อหน่วย (บาท): </label>
        <InputNumber
          value={ratePerUnit}
          onChange={(val) => setRatePerUnit(val || 0)}
          style={{ width: '100%', marginTop: 8 }}
        />
      </div>
      <Button type="primary" onClick={calculateTotal} block style={{ marginTop: 8 }}>
        คำนวณ
      </Button>
      {total !== null && (
        <div style={{ marginTop: 16, fontWeight: 'bold' }}>
          ผลลัพธ์ค่าไฟฟ้ารวม: {total} บาท
        </div>
      )}
    </Card>
  );
}