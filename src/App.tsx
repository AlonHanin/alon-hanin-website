import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { HeroSection } from "./sections/HeroSection";
import { PainPointSection } from "./sections/PainPointSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ProcessSection } from "./sections/ProcessSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { AboutSection } from "./sections/AboutSection";
import { WhySection } from "./sections/WhySection";
import { ContactSection } from "./sections/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Nav />
      <main>
        <HeroSection />
        <PainPointSection />
        <ServicesSection />
        <ProcessSection />
        <ProjectsSection />
        <AboutSection />
        <WhySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
