import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import './App.css';
import Consultancy from './pages/Consultancy';
import ContactPage from './pages/ContactPage';
import POSPage from './pages/POSPage';
import InventoryPage from './pages/InventoryPage';
import SchoolManagementPage from './pages/SchoolManagementPage';
import SchoolManagementFeatures from './pages/SchoolManagementFeatures';
import SchoolFeaturesDetails from './pages/SchoolFeaturesDetails';
import KadaiFeaturesDetails from './pages/KadaiFeaturesDetails';
import KadaiApp from './pages/KadaiApp';
import KadaiFeatures from './pages/KadaiFeatures';
import AttendanceInventoryApp from './pages/AttendanceInventoryApp';
import AttendanceInventoryFeatures from './pages/AttendanceInventoryFeatures';
import AttendanceInventoryFeaturesDetails from './pages/AttendanceInventoryFeaturesDetails';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pospage" element={<POSPage />} />
          <Route path="/inventorypage" element={<InventoryPage />} />
          <Route path="/kadai" element={<KadaiApp />} />
          <Route path="/kadai/features" element={<KadaiFeatures />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/school-management/features/:featureId" element={<SchoolFeaturesDetails />} />
          <Route path="/school-management/features" element={<SchoolManagementFeatures />} />
          <Route path="/school-management" element={<SchoolManagementPage />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/kadai/features/:featureId" element={<KadaiFeaturesDetails />} />
          <Route path="/attendance-inventory" element={<AttendanceInventoryApp />} />
          <Route path="/attendance-inventory/features" element={<AttendanceInventoryFeatures />} />
          <Route path="/attendance-inventory/features/:featureId" element={<AttendanceInventoryFeaturesDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
