import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './Contact.css';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const LINKS = [
  { label: 'GitHub', value: 'github.com/aahan-bansal', href: 'https://github.com', icon: '⌥' },
  { label: 'LinkedIn', value: 'linkedin.com/in/aahan-bansal', href: 'https://linkedin.com', icon: '⊞' },
  { label: 'Email', value: 'aahan@jklu.edu.in', href: 'mailto:aahan@jklu.edu.in', icon: '✉' },
  { label: 'Location', value: 'Jaipur, Rajasthan, India', href: null, icon: '◈' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
  const [error, setError] = useState('');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      await axios.post(`${API_BASE}/api/contact`, form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setError(err.response?.data?.error || 'Transmission failed. Try again.');
    }
  };

  return (
    <section id="contact" style={{ background: 'var(--surface-lowest)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">06.CONNECT_CLI</p>
          <div className="section-divider" />
          <h2 className="section-title">Open a Connection</h2>
        </motion.div>

        <div className="contact__layout">
          <motion.div
            className="contact__form-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact__terminal card">
              <div className="contact__terminal-bar">
                <span className="mono contact__terminal-title">// TRANSMIT_MESSAGE.sh</span>
                <div className="contact__terminal-dots">
                  <span style={{ background: 'var(--error)' }} />
                  <span style={{ background: 'var(--secondary)' }} />
                  <span style={{ background: 'var(--primary)' }} />
                </div>
              </div>

              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__field">
                  <label className="mono contact__label" htmlFor="name">NAME_INPUT:</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="contact__input mono"
                    placeholder="Aahan Bansal"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label className="mono contact__label" htmlFor="email">EMAIL_ADDR:</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="contact__input mono"
                    placeholder="user@domain.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label className="mono contact__label" htmlFor="message">MESSAGE_BODY:</label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact__input contact__textarea mono"
                    placeholder="// enter your message here..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {status === 'success' && (
                  <p className="mono contact__status contact__status--ok">
                    ✓ TRANSMISSION_SUCCESS — message logged.
                  </p>
                )}
                {status === 'error' && (
                  <p className="mono contact__status contact__status--err">
                    ✗ ERROR — {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn-primary contact__submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? '> SENDING...' : '> SEND_PACKET'}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            className="contact__links-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="contact__links-panel card">
              <p className="mono contact__links-title">// DIRECT_LINKS</p>
              {LINKS.map(l => (
                <div key={l.label} className="contact__link-item">
                  <span className="contact__link-icon mono">{l.icon}</span>
                  <div>
                    <p className="mono contact__link-label">{l.label}</p>
                    {l.href ? (
                      <a href={l.href} target="_blank" rel="noreferrer" className="contact__link-val">
                        {l.value}
                      </a>
                    ) : (
                      <p className="contact__link-val">{l.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
