import { motion } from 'framer-motion';
import './Certs.css';

const CERTS = [
  {
    title: 'C for Everyone',
    issuer: 'Coursera / NPTEL',
    year: '2024',
    tag: 'IoT',
    color: 'var(--primary)',
    link: 'https://coursera.org/share/5e1d5118075ee772635d43bedb7eb5a8',
  },
  {
    title: '5G Use Case Lab Training',
    issuer: 'AICTE ATAL Academy',
    year: '2024',
    tag: '5G / IoT',
    color: 'var(--secondary)',
    link: 'https://1drv.ms/b/c/559fe13973b7c2bc/IQAFNtIkiNFpT4gvgUwNJgLvAef0L9wGWRnH1NL5ytN1iis?e=yHWfMU',
  },
  {
    title: 'Python',
    issuer: 'Coursera',
    year: '2024',
    tag: 'CS Core',
    color: 'var(--primary)',
    link: 'https://coursera.org/share/790765ac5eb82d7a80fad4d386b3361b',
  },
  {
    title: 'Red Hat System Administration I (RH124)',
    issuer: 'Red Hat Academy',
    year: '2025',
    tag: 'Linux / Admin',
    color: 'var(--error)',
    link: 'https://1drv.ms/b/c/559fe13973b7c2bc/IQAHcAVMemheRYUTfodr7mAHAV5N0dUAD2CSZpLCWNkmpV8?e=vxFJVp',
  },
];

const ACHIEVEMENTS = [
  'Completed 7+ IoT hardware projects with cloud integration',
  'VLSI design across 180nm–45nm technology nodes',
  'Proficient in Verilog/VHDL hardware description languages',
  'Real-time DSP and wireless communication system analysis',
];

export default function Certs() {
  return (
    <section id="certs">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">05.CERT_STORAGE</p>
          <div className="section-divider" />
          <h2 className="section-title">Certifications & Achievements</h2>
        </motion.div>

        <div className="certs__layout">
          <div className="certs__grid">
            {CERTS.map((c, i) => (
              <motion.a
                key={i}
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="cert-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="cert-card__top">
                  <span className="mono cert-card__tag" style={{ color: c.color }}>[{c.tag}]</span>
                  <span className="mono cert-card__year">{c.year}</span>
                </div>
                <h3 className="cert-card__title">{c.title}</h3>
                <p className="mono cert-card__issuer">{c.issuer}</p>
                <div className="cert-card__bar" style={{ background: c.color }} />
              </motion.a>
            ))}
          </div>

          <motion.div
            className="certs__achievements card"
            style={{ height: '100%' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mono certs__ach-label" style={{ color: 'var(--secondary)' }}>
              // ACHIEVEMENTS
            </p>
            <ul className="certs__ach-list">
              {ACHIEVEMENTS.map((a, i) => (
                <li key={i} className="certs__ach-item">
                  <span className="mono" style={{ color: 'var(--primary)' }}>→ </span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
