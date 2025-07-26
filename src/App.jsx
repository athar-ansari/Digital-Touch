import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <ServicesSection />

      <Footer />
    </div>
  );
}

export default App;
