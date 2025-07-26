import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import CertificateGallery from "./components/CertificateGallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CertificateGallery />
      <Footer />
    </div>
  );
}

export default App;
