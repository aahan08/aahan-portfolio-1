import { motion } from 'framer-motion';
import './About.css';

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
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about__photo-wrap card">
              <img src="/src/assets/aahan.jpg" alt="Aahan Bansal" />
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
              Second-year B.Tech student in Systems Engineering at JK Lakshmipat University, Jaipur. I work at the intersection of hardware and software — designing IoT systems, VLSI circuits, and embedded automation that solve real problems.
            </p>
            <p className="about__bio">
              My foundation spans Data Structures, Operating Systems, Computer Networks, and Digital Electronics. I've built IoT safety systems with cloud analytics, analyzed BER performance in wireless communication, and designed CMOS circuits from 180nm to 45nm nodes.
            </p>
            <p className="about__bio">
              Driven by the belief that the best engineers understand both the silicon and the software above it.
            </p>

            <div className="about__chips">
              <span className="chip"><span className="dot" />LOCATION: JAIPUR, RJ</span>
              <span className="chip"><span className="dot" />LEVEL: 2ND YEAR B.TECH</span>
              <span className="chip"><span className="dot amber" />STATUS: OPEN TO WORK</span>
              <span className="chip"><span className="dot" />BRANCH: SYSTEMS ENG.</span>
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
