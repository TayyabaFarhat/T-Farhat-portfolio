// App.jsx
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Testimonials } from "./sections/Testimonials";
import { Education } from "@/sections/Education";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Interactive premium background */}
      <InteractiveBackground />

      {/* Premium cursor glow */}
      <CursorGlow />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
