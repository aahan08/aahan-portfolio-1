import { motion } from 'framer-motion';
import './Skills.css';

const SKILL_GROUPS = [
  {
    group: 'Frontend / Software',
    color: 'var(--primary)',
    skills: [
      { name: 'C / C++', level: 85, icon: 'devicon-cplusplus-plain' },
      { name: 'Python', level: 78, icon: 'devicon-python-plain' },
      { name: 'JavaScript', level: 55, icon: 'devicon-javascript-plain' },
      { name: 'MATLAB', level: 72, icon: 'devicon-matlab-plain' },
      { name: 'R', level: 60, icon: 'devicon-r-plain' },
    ]
  },
  {
    group: 'Backend / Systems',
    color: 'var(--secondary)',
    skills: [
      { name: 'Verilog / VHDL', level: 75, icon: 'devicon-embeddedc-plain' },
      { name: 'Arduino / ESP8266', level: 88, icon: 'devicon-arduino-plain' },
      { name: 'Raspberry Pi', level: 72, icon: 'devicon-raspberrypi-plain' },
      { name: 'MQTT / HTTP', level: 70, icon: 'devicon-networkx-plain' },
      { name: 'I2C / SPI', level: 80, icon: 'devicon-embeddedc-plain' },
    ]
  },
  {
    group: 'Tools & Platforms',
    color: 'var(--primary)',
    skills: [
      { name: 'LTSpice', level: 82, icon: 'devicon-linux-plain' },
      { name: 'Xilinx ISE', level: 70, icon: 'devicon-debian-plain' },
      { name: 'ThingSpeak', level: 78, icon: 'devicon-matlab-plain' },
      { name: 'Git / VS Code', level: 80, icon: 'devicon-git-plain' },
      { name: 'Blynk / Cloud', level: 68, icon: 'devicon-googlecloud-plain' },
    ]
  }
];

function CircleProgress({ level, color, size = 80, icon }) {
  const r = (size - 10) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (level / 100) * circ;
  const iconSize = size * 0.38;

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--surface-lowest)" strokeWidth={5} />
        <motion.circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none"
          stroke={color}
          strokeWidth={5}
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          strokeLinecap="square"
        />
      </svg>
      {icon && (
        <i
          className={icon}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: iconSize,
            color: color,
            lineHeight: 1,
          }}
        />
      )}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--surface-lowest)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">02.SKILL_MATRIX</p>
          <div className="section-divider" />
          <h2 className="section-title">Capability Index</h2>
        </motion.div>

        <div className="skills__groups">
          {SKILL_GROUPS.map((g, gi) => (
            <motion.div
              key={g.group}
              className="skills__group card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <p className="skills__group-title mono" style={{ color: g.color }}>
                // {g.group}
              </p>
              <div className="skills__grid">
                {g.skills.map(s => (
                  <div key={s.name} className="skill-item" title={`${s.level}% proficiency`}>
                    <CircleProgress level={s.level} color={g.color} size={72} icon={s.icon} />
                    <span className="mono skill-item__pct" style={{ color: g.color }}>
                      {s.level}%
                    </span>
                    <span className="skill-item__name">{s.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
