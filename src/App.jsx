import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Certificates />
      <Footer />
    </div>
  );
}

export default App;
