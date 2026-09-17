import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Manufacturing from './pages/Manufacturing';
import Certificate from './pages/Certificate';
import Enquiry from './pages/Enquiry';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/contact" element={<Contact />} />

          {/* Legacy product URLs are redirected to the unified catalogue. */}
          <Route path="/api" element={<Navigate to="/products" replace />} />
          <Route path="/intermediate" element={<Navigate to="/products" replace />} />
          <Route path="/herbal" element={<Navigate to="/products/nutraceutical-and-herbal" replace />} />
          <Route path="/api.html" element={<Navigate to="/products" replace />} />
          <Route path="/Intermediate.html" element={<Navigate to="/products" replace />} />
          <Route path="/Herbal.html" element={<Navigate to="/products/nutraceutical-and-herbal" replace />} />

          {/* Existing static-style aliases remain functional. */}
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="/about.html" element={<Navigate to="/about" replace />} />
          <Route path="/product.html" element={<Navigate to="/products" replace />} />
          <Route path="/farming_land.html" element={<Navigate to="/manufacturing" replace />} />
          <Route path="/certifications.html" element={<Navigate to="/certificate" replace />} />
          <Route path="/enquiry.html" element={<Navigate to="/enquiry" replace />} />
          <Route path="/contactus.html" element={<Navigate to="/contact" replace />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}
