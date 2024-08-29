import { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa o CSS do AOS
import About from './components/About/About';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duração das animações em milissegundos
      once: true, // As animações ocorrem apenas uma vez
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <About />
        <Skills />
        <Projects/>
      </main>
    </>
  );
}

export default App;
