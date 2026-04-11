import { motion } from 'framer-motion';
import './Timeline.css';

const ITEMS = [
  {
    type: 'education',
    title: 'B.Tech in Systems Engineering',
    org: 'JK Lakshmipat University, Jaipur',
    period: '2024 – 2028 (Expected)',
    color: 'var(--primary)',
    details: [
      'Programming I & II, Data Structures & Algorithms',
      'Operating Systems, Computer Networks',
      'Digital Circuits & Systems, Analog Electronics',
      'Signals & Systems, Digital Signal Processing',
      'VLSI, Machine Learning, Linear Algebra',
      'Computer Organization & Architecture',
    ]
  },
];

export default function Timeline() {
  return (
    <section id="timeline" style={{ background: 'var(--surface-lowest)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">04.SYSTEM_UPGRADES</p>
          <div className="section-divider" />
          <h2 className="section-title">Education Timeline</h2>
        </motion.div>

        <div className="timeline">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              className="timeline__item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="timeline__connector">
                <div className="timeline__dot" style={{ background: item.color }} />
                <div className="timeline__line" />
              </div>
              <div className="timeline__card card">
                <div className="timeline__card-top">
                  <div>
                    <span className="mono timeline__type" style={{ color: item.color }}>
                      [{item.type.toUpperCase()}]
                    </span>
                    <h3 className="timeline__title">{item.title}</h3>
                    <p className="mono timeline__org">{item.org}</p>
                  </div>
                  <span className="mono timeline__period">{item.period}</span>
                </div>
                <ul className="timeline__details">
                  {item.details.map((d, di) => (
                    <li key={di} className="mono timeline__detail-item">
                      <span style={{ color: 'var(--primary)' }}>&gt; </span>{d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
