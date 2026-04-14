import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import VillaDetails from './pages/VillaDetails';
import GalleryPage from './pages/GalleryPage';
import BookingPage from './pages/BookingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/villa-details" element={<VillaDetails />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/about-diani" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}