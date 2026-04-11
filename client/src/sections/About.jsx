import { motion } from 'framer-motion';
import './About.css';
import aahanImg from '../assets/aahan.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <p className="section-label">01.ABOUT_ME</p>
          <div className="section-divider" />
          <h2 className="section-title">System Profile</h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__photo-col"
            style={{ height: '100%' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about__photo-wrap card">
              <img src={aahanImg} alt="Aahan Bansal" />
              <div className="about__photo-tag mono">aahan_bansal.sys</div>
            </div>
          </motion.div>

          <motion.div
            className="about__text-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="about__bio">
              B.Tech student in Communication and Computer Engineering at JK Lakshmipat University, Rajasthan. I work at the intersection of hardware and software — designing real-world IoT systems, VLSI circuits, and embedded automation solutions that solve practical problems. Passionate about building intelligent systems that bridge the gap between silicon and software.
            </p>
            <p className="about__bio">
              My technical foundation spans Data Structures, Operating Systems, Computer Networks, and Digital Electronics. I've architected IoT safety systems with cloud analytics on ThingSpeak, analyzed BER performance in wireless communication, designed CMOS circuits across 180nm to 45nm technology nodes using LTSpice, and implemented embedded systems using Arduino, ESP8266, and Raspberry Pi with real-time sensor integration.
            </p>
            <p className="about__bio">
              Cross-domain engineer with hands-on expertise in IoT platforms, VLSI design, embedded programming (Python, C++, Verilog/VHDL), and data analysis. I believe the best systems engineers understand both the silicon below and the software above it — constantly learning, experimenting, and building solutions that matter.
            </p>

            <div className="about__chips">
              <span className="chip"><span className="dot" />LOCATION: JAIPUR, RJ</span>
              <span className="chip"><span className="dot amber" />STATUS: OPEN TO WORK</span>
              <span className="chip"><span className="dot" />BRANCH: ECE</span>
            </div>

            <div className="about__meta">
              <div className="about__meta-item">
                <span className="mono about__meta-val" style={{ color: 'var(--primary)' }}>7+</span>
                <span className="about__meta-lbl">Projects</span>
              </div>
              <div className="about__meta-item">
                <span className="mono about__meta-val" style={{ color: 'var(--secondary)' }}>2024</span>
                <span className="about__meta-lbl">Started</span>
              </div>
              <div className="about__meta-item">
                <span className="mono about__meta-val" style={{ color: 'var(--primary)' }}>JKLU</span>
                <span className="about__meta-lbl">University</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
