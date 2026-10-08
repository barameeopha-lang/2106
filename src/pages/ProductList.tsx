import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Spin, Alert, Typography } from 'antd';
import type { Product } from '../types';

const { Title } = Typography;

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) throw new Error('ไม่สามารถโหลดข้อมูลสินค้าได้');
        return res.json();
      })
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spin size="large" style={{ display: 'block', margin: '50px auto' }} />;
  if (error) return <Alert message="เกิดข้อผิดพลาด" description={error} type="error" showIcon />;

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>รายการสินค้า (API)</Title>
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            <Card
              hoverable
              cover={<img alt={product.title} src={product.image} style={{ height: 200, objectFit: 'contain', padding: 10 }} />}
            >
              <Card.Meta title={product.title} description={`ราคา: $${product.price}`} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;