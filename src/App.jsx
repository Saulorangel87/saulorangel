import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import TechStack from './components/TechStack';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className="site-shell">
        <Navbar />
        <main id="conteudo">
          <Hero />
          <Projects />
          <About />
          <Journey />
          <TechStack />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  );
}
