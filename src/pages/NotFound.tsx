import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <Result
      status="404"
      title="404"
      subTitle={`ไม่พบหน้านี้ กำลังกลับสู่หน้าหลักภายใน ${countdown} วินาที...`}
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          กลับหน้าหลักทันที
        </Button>
      }
    />
  );
};

export default NotFound;