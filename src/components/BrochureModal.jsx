import { useState } from 'react';
import './BrochureModal.css';

export default function BrochureModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', residence: 'Horizon - 4 BHK Imperial Suite' });
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setDownloaded(true);
    // Trigger simulated brochure download
    setTimeout(() => {
      const element = document.createElement('a');
      const file = new Blob([
        `SD MAJESTA — HORIZON SKY RESIDENCES\n\nOfficial Architectural Dossier & Investment Schedule\n\nRecipient: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSelected Residence: ${formData.residence}\n\nKey Highlights:\n- 32 Storeys of Architectural Eminence\n- Double-height Grand Lobby & Private Elevators\n- Sky Infinity Pool, Zen Botanical Sanctuary, Technogym Spa\n- Possession: Q4 2027\n\nPrivate Wealth Concierge: +91 70099 70071\nWebsite: https://sdmajesta.com`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `SD_Majesta_Horizon_Dossier_${formData.name.replace(/\s+/g, '_')}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 800);
  };

  return (
    <div className="brochure-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="brochure-modal-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="brochure-modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="brochure-modal-header">
          <span className="brochure-badge">Instant VIP Access</span>
          <h3 className="brochure-modal-title">Download Horizon Architectural Dossier</h3>
          <p className="brochure-modal-desc">
            Receive the official 48-page e-brochure containing detailed floor layouts, technical specifications, and current investment schedules.
          </p>
        </div>

        {downloaded ? (
          <div className="brochure-success">
            <div className="success-icon">✓</div>
            <h4>Dossier Dispatched</h4>
            <p>Your download has begun. An encrypted digital copy has also been sent to <strong>{formData.email}</strong>.</p>
            <button type="button" className="btn btn-gold" onClick={onClose}>Done</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="brochure-form">
            <div className="brochure-field">
              <label htmlFor="b-name">Your Full Name *</label>
              <input
                id="b-name"
                type="text"
                required
                placeholder="e.g. Vikram Malhotra"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="brochure-field-row">
              <div className="brochure-field">
                <label htmlFor="b-phone">Mobile Number *</label>
                <input
                  id="b-phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="brochure-field">
                <label htmlFor="b-email">Email Address *</label>
                <input
                  id="b-email"
                  type="email"
                  required
                  placeholder="malhotra@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="brochure-field">
              <label htmlFor="b-residence">Preferred Residence Type</label>
              <select
                id="b-residence"
                value={formData.residence}
                onChange={(e) => setFormData({ ...formData, residence: e.target.value })}
              >
                <option value="Horizon - 3 BHK Royal Suite">3 BHK Royal Suite (~2,450 sq.ft.)</option>
                <option value="Horizon - 4 BHK Imperial Suite">4 BHK Imperial Suite (~3,650 sq.ft.)</option>
                <option value="Horizon - 5 BHK Sky Penthouse">5 BHK Sky Penthouse (~6,200 sq.ft.)</option>
              </select>
            </div>

            <button type="submit" className="btn btn-gold btn-full">
              Download Confidential Dossier
            </button>
            <span className="privacy-text">🔒 Strictly confidential. No spam guaranteed.</span>
          </form>
        )}
      </div>
    </div>
  );
}
