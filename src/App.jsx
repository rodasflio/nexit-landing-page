import Header from './components/Header/Header.jsx';
import HeroSection from './features/HeroSection/HeroSection.jsx';
import ToolsSection from './features/ToolsSection/ToolsSection.jsx';
import FeaturesSection from './features/FeaturesSection/FeaturesSection.jsx';
import Footer from './components/Footer/Footer.jsx'; // Importe o novo componente

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ToolsSection />
      <FeaturesSection />
      <Footer /> {/* Adicione o novo componente aqui */}
    </div>
  );
}

export default App;