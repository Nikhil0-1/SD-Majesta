import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', project: 'Horizon', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', phone: '', email: '', project: 'Horizon', message: '' });
  };

  return (
    <section className="contact" id="connect">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <span className="section-label">Connect</span>
            <h2 className="section-title">
              Let's Create Something<br />
              <em className="gold">Exceptional</em>
            </h2>
            <div className="gold-line" />

            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-label">Phone</span>
                <a href="tel:+917009970071" className="contact__detail-value">
                  +91 700 99 700 71
                </a>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-label">Email</span>
                <a href="mailto:contact@sdmajesta.com" className="contact__detail-value">
                  contact@sdmajesta.com
                </a>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-label">Office</span>
                <p className="contact__detail-value">
                  B/904, Shilp Corporate Park,<br />
                  Rajpath-Rangoli Road, Bodakdev,<br />
                  Ahmedabad, Gujarat 380054
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/B%2F904%2C+Shilp+Corporate+Park%2C+Rajpath-Rangoli+Road%2C+Bodakdev%2C+Ahmedabad%2C+Gujarat+380054"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline contact__map-btn"
            >
              Open in Google Maps
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} id="contact-form">
            <h3 className="contact__form-title">Send Inquiry</h3>

            <div className="contact__field">
              <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required id="contact-name" />
              <span className="contact__field-line" />
            </div>

            <div className="contact__row">
              <div className="contact__field">
                <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required id="contact-phone" />
                <span className="contact__field-line" />
              </div>
              <div className="contact__field">
                <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required id="contact-email" />
                <span className="contact__field-line" />
              </div>
            </div>

            <div className="contact__field">
              <select name="project" value={form.project} onChange={handleChange} id="contact-project">
                <option value="Horizon">Horizon</option>
                <option value="Other">Other / Upcoming</option>
              </select>
              <span className="contact__field-line" />
            </div>

            <div className="contact__field">
              <textarea name="message" placeholder="Your Message" rows={4} value={form.message} onChange={handleChange} id="contact-message" />
              <span className="contact__field-line" />
            </div>

            <button type="submit" className="btn btn-gold contact__submit" id="contact-submit">
              {submitted ? 'Inquiry Sent Successfully' : 'Send Inquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
