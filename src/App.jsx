import Header from './components/Header/Header.jsx';
import HeroSection from './features/HeroSection/HeroSection.jsx';
import ToolsSection from './features/ToolsSection/ToolsSection.jsx';
import FeaturesSection from './features/FeaturesSection/FeaturesSection.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div>
      {/* O elemento .gradient-bg foi removido */}
      <Header />
      <HeroSection />
      <ToolsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

export default App;