import { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const PROJECTS = [
  {
    id: 'p1',
    title: 'Smart Helmet Tilt & Impact Monitor',
    tag: 'IoT Safety',
    desc: 'Real-time helmet safety system using Arduino + MPU6050 (6-axis IMU) with anomaly detection, ESP8266 cloud upload to ThingSpeak, and Python-based Telegram alerts.',
    tech: ['Arduino', 'ESP8266', 'MPU6050', 'ThingSpeak', 'Python', 'MQTT'],
    github: 'https://github.com/aahan08/Helmet-Tilt-Detaction',
    live: null,
    color: 'var(--primary)',
  },
  {
    id: 'p2',
    title: 'BER Analysis — QAM Modulation',
    tag: 'Digital Comm.',
    desc: 'MATLAB simulation of BER performance for 16-QAM, 64-QAM, 256-QAM under AWGN. Plotted BER vs SNR curves and analyzed spectral efficiency trade-offs.',
    tech: ['MATLAB', 'QAM', 'AWGN', 'Signal Processing'],
    github: 'https://github.com/aahan08/BER-Performance-Analysis',
    live: null,
    color: 'var(--secondary)',
  },
  {
    id: 'p3',
    title: 'VLSI Circuit Design Suite',
    tag: 'CMOS / VLSI',
    desc: 'LTSpice-based analysis of CMOS Inverter, Full Adder, Differential Amplifier, and Current Mirror across 180nm–45nm nodes. VTC, propagation delay, noise margins.',
    tech: ['LTSpice', 'CMOS', 'VLSI', '180nm', '90nm', '45nm'],
    github: 'https://github.com',
    live: null,
    color: 'var(--primary)',
  },
  {
    id: 'p4',
    title: 'Embedded Automation — Raspberry Pi',
    tag: 'Embedded Systems',
    desc: 'HC-SR04 ultrasonic sensor + PWM servo control on Raspberry Pi. Python GPIO-driven automated response system for real-time object distance detection.',
    tech: ['Raspberry Pi', 'HC-SR04', 'PWM', 'Python', 'GPIO'],
    github: 'https://github.com',
    live: null,
    color: 'var(--secondary)',
  },
  {
    id: 'p5',
    title: 'Digital System Design — Verilog/VHDL',
    tag: 'HDL Design',
    desc: '4-bit ALU with 16 operations in Verilog HDL. Implemented logic gates, MUXes, flip-flops using structural and behavioral modeling. Verified with Xilinx ISE testbenches.',
    tech: ['Verilog', 'VHDL', 'Xilinx ISE', 'FPGA', 'ALU'],
    github: 'https://github.com',
    live: null,
    color: 'var(--primary)',
  },
  {
    id: 'p6',
    title: 'Environmental Data Monitor',
    tag: 'IoT Cloud',
    desc: 'BME280 sensor (temp/humidity/pressure) → ESP8266 → ThingSpeak cloud dashboard. End-to-end IoT pipeline from hardware sensor to cloud visualization.',
    tech: ['BME280', 'ESP8266', 'ThingSpeak', 'IoT', 'WiFi'],
    github: 'https://github.com/aahan08/Environmental-Data-Monitor',
    live: null,
    color: 'var(--secondary)',
  },
  {
    id: 'p7',
    title: 'EDA — Flight Dataset Analysis',
    tag: 'Data Analysis',
    desc: 'Exploratory data analysis on large-scale flight dataset using R and dplyr. Filtering, grouping, aggregation, frequency distributions, and statistical visualization.',
    tech: ['R', 'dplyr', 'EDA', 'Statistics'],
    github: 'https://github.com',
    live: null,
    color: 'var(--primary)',
  },
  {
    id: 'p8',
    title: 'Obscure — Secure Messaging App',
    tag: 'Android',
    desc: 'A Kotlin + Jetpack Compose secure messaging app with end-to-end encryption, biometric authentication, real-time WebSocket chat, and FCM notifications.',
    tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Room', 'WebSockets', 'Firebase', 'Crypto'],
    github: 'https://github.com/aahan08/secure_message_app',
    live: null,
    color: 'var(--secondary)',
  },
];

const ALL_TAGS = ['ALL', ...new Set(PROJECTS.map(p => p.tag))];

export default function Projects() {
  const [filter, setFilter] = useState('ALL');

  const visible = filter === 'ALL' ? PROJECTS : PROJECTS.filter(p => p.tag === filter);

  return (
    <section id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">03.REPO_LOG</p>
          <div className="section-divider" />
          <h2 className="section-title">Project Repository</h2>
        </motion.div>

        <div className="projects__filters">
          {ALL_TAGS.map(t => (
            <button
              key={t}
              className={`projects__filter-btn mono${filter === t ? ' active' : ''}`}
              onClick={() => setFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {visible.map((p, i) => (
            <motion.div
              key={p.id}
              className="project-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div className="project-card__header">
                <span className="mono project-card__tag" style={{ color: p.color }}>
                  [{p.tag}]
                </span>
                <div className="project-card__links">
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-card__link mono">
                    GITHUB ↗
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="project-card__link mono">
                      LIVE ↗
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.desc}</p>
              <div className="project-card__tech">
                {p.tech.map(t => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
