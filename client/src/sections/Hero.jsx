import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const ROLES = [
  'Communication & Computer Engineer',
  'IoT Developer',
  'Embedded Systems Designer',
  'VLSI Enthusiast',
  'Hardware + Software',
];

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = ROLES[roleIndex];
    let i = 0;
    let timer;

    if (typing) {
      timer = setInterval(() => {
        setDisplayed(role.slice(0, i + 1));
        i++;
        if (i === role.length) {
          clearInterval(timer);
          setTimeout(() => setTyping(false), 1800);
        }
      }, 60);
    } else {
      let j = role.length;
      timer = setInterval(() => {
        setDisplayed(role.slice(0, j - 1));
        j--;
        if (j === 0) {
          clearInterval(timer);
          setRoleIndex(idx => (idx + 1) % ROLES.length);
          setTyping(true);
        }
      }, 35);
    }

    return () => clearInterval(timer);
  }, [roleIndex, typing]);

  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="hero__greeting mono">// Systems &amp; IoT Engineer</p>
          <h1 className="hero__name">AAHAN<br /><span>BANSAL</span></h1>
          <p className="hero__role mono">
            &gt; <span className="hero__typewriter">{displayed}</span>
            <span className="hero__cursor">_</span>
          </p>
          <p className="hero__bio">
            Building hardware–software bridges through IoT, VLSI &amp; embedded systems.
          </p>
          <div className="hero__ctas">
            <a href={`${API_BASE}/api/download/pdf`} className="btn-primary" target="_blank" rel="noreferrer">
              ↓ FETCH_CV_PDF
            </a>
            <a href={`${API_BASE}/api/download/docx`} className="btn-secondary" target="_blank" rel="noreferrer">
              ↓ FETCH_CV_DOCX
            </a>
          </div>
          <div className="hero__status">
            <span className="chip"><span className="dot" />OPEN_TO_INTERNSHIPS</span>
            <span className="chip"><span className="dot amber" />JKLU · JAIPUR</span>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="hero__img-wrap">
            <img src="/src/assets/aahan.jpg" alt="Aahan Bansal" className="hero__img" />
            <div className="hero__img-overlay" />
          </div>
          <div className="hero__stat-badge hero__stat-badge--tl">
            <span className="mono">STATUS</span>
            <span className="mono" style={{ color: 'var(--primary)' }}>ACTIVE</span>
          </div>
          <div className="hero__stat-badge hero__stat-badge--br">
            <span className="mono">NODE</span>
            <span className="mono" style={{ color: 'var(--secondary)' }}>MCU-01</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
