import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Timeline from './sections/Timeline';
import Certs from './sections/Certs';
import Contact from './sections/Contact';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <BrowserRouter>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Certs />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <span className="mono footer__copy">
            © <span style={{ color: 'var(--primary)' }}>AAHAN_BANSAL</span> · SYSTEMS & IOT ENGINEER
          </span>
          <span className="mono footer__build">
            BUILD: <span style={{ color: 'var(--secondary)' }}>MERN_v1.0</span>
          </span>
        </div>
      </footer>
    </BrowserRouter>
  );
}
