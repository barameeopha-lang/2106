import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Calculate from './pages/Calculate';
import ProductList from './pages/ProductList';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '16px', background: '#f0f2f5', display: 'flex', gap: '16px' }}>
        <Link to="/">Home</Link>
        <Link to="/calculate">Calculate</Link>
        <Link to="/products">Products</Link>
      </nav>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculate" element={<Calculate />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}