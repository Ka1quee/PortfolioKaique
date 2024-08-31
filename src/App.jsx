import { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa o CSS do AOS
import About from './components/About/About';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000 // Duração das animações em milissegundos
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Contacts/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
