import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectHorizon.css';

const horizonAmenities = [
  {
    icon: '🏛️',
    title: 'Double-Height Grand Lobby',
    desc: 'Triple-volume Italian marble foyer with bespoke sculptural lighting and 24/7 white-glove concierge desk.'
  },
  {
    icon: '🏊‍♂️',
    title: 'Sky Infinity Pool & Deck',
    desc: 'Heated infinity-edge pool perched high above the skyline with sun loungers and cabana service.'
  },
  {
    icon: '🌿',
    title: 'Zen Botanical Sanctuary',
    desc: 'Acre-wide elevated tranquil greens with aromatic flora, meditation pavilions, and water cascades.'
  },
  {
    icon: '🏋️',
    title: 'Bespoke Wellness & Spa',
    desc: 'State-of-the-art Technogym studio, private steam/sauna suites, yoga deck, and certified wellness trainers.'
  },
  {
    icon: '🎬',
    title: 'Private Screening Lounge',
    desc: 'Acoustically treated 18-seat private cinema with Dolby Atmos surround sound and plush velvet recliners.'
  },
  {
    icon: '🛡️',
    title: 'Multi-Tier Smart Security',
    desc: 'Facial recognition access, biometric private elevator entry, 24/7 AI-monitored surveillance and safe zones.'
  }
];

const floorPlans = [
  {
    type: '3 BHK Royal Residence',
    area: '2,450 Sq. Ft.',
    balconies: '2 Private Decks',
    highlights: ['Corner unit orientation with 270° views', 'Master suite with walk-in wardrobe', 'Servant quarter with separate entry', 'Italian modular kitchen by Poliform'],
    badge: 'Limited Availability'
  },
  {
    type: '4 BHK Imperial Residence',
    area: '3,650 Sq. Ft.',
    balconies: '3 Expansive Terraces',
    highlights: ['Double-height living and dining space', 'Private elevator access directly into foyer', 'Master bath with freestanding soaking tub', 'Smart home automation pre-wired'],
    badge: 'Signature Series'
  },
  {
    type: '5 BHK Sky Penthouse',
    area: '6,200 Sq. Ft.',
    balconies: 'Private Rooftop Deck & Plunge Pool',
    highlights: ['Crown level duplex living', 'Private temperature-controlled plunge pool', 'Dedicated party terrace and bar counter', '3 covered parking slots included'],
    badge: 'Collector’s Edition'
  }
];

const horizonGallery = [
  { src: '/assets/horizon_facade_1788700744631.jpg', title: 'Architectural Facade', tag: 'Exterior' },
  { src: '/assets/penthouse_living_1788699627316.jpg', title: 'Penthouse Living Space', tag: 'Interior' },
  { src: '/assets/lobby_interior_1788698961382.jpg', title: 'Triple-Height Grand Lobby', tag: 'Arrival' },
  { src: '/assets/amenity_pool_zen_1788699479837.jpg', title: 'Sky Infinity Pool & Cabanas', tag: 'Amenities' },
  { src: '/assets/amenity_clubhouse_1788699091926.jpg', title: 'Private Members Club', tag: 'Lifestyle' },
  { src: '/assets/amenity_fitness_1788699350560.jpg', title: 'Artisan Wellness Pavilion', tag: 'Fitness' }
];

export default function ProjectHorizon() {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [brochureRequested, setBrochureRequested] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', configuration: '4 BHK Imperial Residence', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleBrochureSubmit = (e) => {
    e.preventDefault();
    setBrochureRequested(true);
    setTimeout(() => {
      alert('Thank you. The official SD Majesta Horizon brochure will be sent to your email.');
    }, 400);
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="horizon-page">
      {/* Top Banner Hero */}
      <section className="horizon-hero">
        <div className="horizon-hero__bg-wrap">
          <img
            src="/assets/horizon_facade_1788700744631.jpg"
            alt="Horizon by SD Majesta Exterior Facade"
            className="horizon-hero__bg"
          />
          <div className="horizon-hero__overlay" />
        </div>

        <div className="container horizon-hero__content">
          <div className="horizon-hero__breadcrumbs">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/#projects" className="breadcrumb-link">Projects</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Horizon</span>
          </div>

          <div className="horizon-hero__tag">Flagship Development</div>
          <h1 className="horizon-hero__title">
            HORIZON<br />
            <span>Sky Residences & Penthouses</span>
          </h1>
          <p className="horizon-hero__subtitle">
            An architectural statement in sheer elegance. Perched high above the horizon, redefine your living experience with unmatched space, privacy, and craftsmanship.
          </p>

          <div className="horizon-hero__stats">
            <div className="horizon-stat">
              <span className="stat-val">32</span>
              <span className="stat-lbl">Storeys of Grandeur</span>
            </div>
            <div className="horizon-stat-divider" />
            <div className="horizon-stat">
              <span className="stat-val">74</span>
              <span className="stat-lbl">Exclusive Residences</span>
            </div>
            <div className="horizon-stat-divider" />
            <div className="horizon-stat">
              <span className="stat-val">3 & 4 BHK</span>
              <span className="stat-lbl">+ Sky Duplex Penthouses</span>
            </div>
            <div className="horizon-stat-divider" />
            <div className="horizon-stat">
              <span className="stat-val">Q4 2027</span>
              <span className="stat-lbl">Possession Target</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Overview */}
      <section className="horizon-overview container">
        <div className="horizon-overview__grid">
          <div className="horizon-overview__text">
            <span className="section-subtitle">Architectural Philosophy</span>
            <h2 className="section-title">Where Visionary Geometry Meets Uncompromised Comfort</h2>
            <p className="horizon-p">
              Designed by world-renowned architectural visionaries, Horizon is shaped to maximize light, wind flow, and infinite panoramic city views. Every surface has been curated with bespoke materials—from imported Italian Carrara marble to custom brushed gold hardware.
            </p>
            <p className="horizon-p">
              Each sky residence offers a dedicated private elevator foyer, expansive wrapped balconies, high acoustic ceiling isolation, and effortless smart home automation controlling climate, ambiance, and motorized shading.
            </p>
            
            <div className="horizon-spec-pills">
              <div className="spec-pill"><span>📐</span> 11.5 Ft Clear Ceiling Height</div>
              <div className="spec-pill"><span>🪟</span> Low-E Floor-to-Ceiling Thermal Glazing</div>
              <div className="spec-pill"><span>🌿</span> IGBC Gold Certified Green Building</div>
              <div className="spec-pill"><span>🔑</span> Biometric Touchless Elevator Access</div>
            </div>
          </div>

          <div className="horizon-overview__image-wrapper">
            <img
              src="/assets/penthouse_living_1788699627316.jpg"
              alt="Horizon Penthouse Living"
              className="horizon-overview__img"
            />
            <div className="horizon-overview__badge">
              <span className="gold-text">Private Sanctuary</span>
              <span>Ultra-exclusive high living</span>
            </div>
          </div>
        </div>
      </section>

      {/* Residences & Configurations */}
      <section className="horizon-residences">
        <div className="container">
          <div className="residences-header">
            <span className="section-subtitle">Floor Plans & Configurations</span>
            <h2 className="section-title">Crafted For The Discerning Few</h2>
            <p className="residences-desc">
              Explore our collection of expansive sky residences designed with functional zoning, generous private terraces, and expansive corner views.
            </p>
          </div>

          <div className="plans-nav">
            {floorPlans.map((plan, idx) => (
              <button
                key={idx}
                className={`plan-tab ${selectedPlan === idx ? 'plan-tab--active' : ''}`}
                onClick={() => setSelectedPlan(idx)}
              >
                <span className="plan-tab__badge">{plan.badge}</span>
                <span className="plan-tab__title">{plan.type}</span>
                <span className="plan-tab__area">{plan.area}</span>
              </button>
            ))}
          </div>

          <div className="plan-detail-card">
            <div className="plan-detail-info">
              <div className="plan-detail-badge">{floorPlans[selectedPlan].badge}</div>
              <h3 className="plan-detail-title">{floorPlans[selectedPlan].type}</h3>
              <div className="plan-detail-specs">
                <div className="spec-box">
                  <span className="spec-box__label">Super Built-up Area</span>
                  <span className="spec-box__value">{floorPlans[selectedPlan].area}</span>
                </div>
                <div className="spec-box">
                  <span className="spec-box__label">Outdoor Living</span>
                  <span className="spec-box__value">{floorPlans[selectedPlan].balconies}</span>
                </div>
              </div>

              <div className="plan-highlights">
                <h4 className="highlights-title">Residence Inclusions:</h4>
                <ul className="highlights-list">
                  {floorPlans[selectedPlan].highlights.map((h, i) => (
                    <li key={i}>
                      <span className="gold-check">✓</span> {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="plan-actions">
                <a href="#horizon-inquire" className="btn btn-gold">Inquire For Pricing</a>
                <a href="#brochure-modal" onClick={handleBrochureSubmit} className="btn btn-outline">
                  Download Floor Plan PDF
                </a>
              </div>
            </div>

            <div className="plan-detail-render">
              <img
                src={selectedPlan === 0 ? '/assets/lobby_interior_1788698961382.jpg' : selectedPlan === 1 ? '/assets/penthouse_living_1788699627316.jpg' : '/assets/horizon_hero_1788698867073.jpg'}
                alt={floorPlans[selectedPlan].type}
                className="plan-render-img"
              />
              <div className="plan-render-caption">
                Artistic Impression · {floorPlans[selectedPlan].type}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Amenities */}
      <section className="horizon-amenities-section">
        <div className="container">
          <div className="amenities-intro">
            <span className="section-subtitle">World-Class Facilities</span>
            <h2 className="section-title">An Oasis of Unrivaled Privilege</h2>
            <p className="amenities-subtext">Over 40,000 sq.ft. of curated indoor and alfresco lifestyle amenities exclusively for residents.</p>
          </div>

          <div className="amenities-grid-luxury">
            {horizonAmenities.map((item, idx) => (
              <div key={idx} className="luxury-amenity-card">
                <div className="card-icon">{item.icon}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
                <div className="card-glow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase Gallery */}
      <section className="horizon-gallery-section container">
        <div className="gallery-top">
          <div>
            <span className="section-subtitle">Visual Tour</span>
            <h2 className="section-title">Cinematic Glimpses of Horizon</h2>
          </div>
          <p className="gallery-hint">Click any image to view full scale</p>
        </div>

        <div className="horizon-gallery-grid">
          {horizonGallery.map((item, idx) => (
            <div
              key={idx}
              className={`gallery-card-item ${idx === 0 ? 'span-two' : ''}`}
              onClick={() => setLightboxImg(item.src)}
            >
              <img src={item.src} alt={item.title} className="gallery-thumb" />
              <div className="gallery-item-overlay">
                <span className="item-tag">{item.tag}</span>
                <h4 className="item-title">{item.title}</h4>
                <span className="item-expand-btn">⤢ View</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquire / Booking Section */}
      <section className="horizon-booking" id="horizon-inquire">
        <div className="container booking-grid">
          <div className="booking-info">
            <span className="section-subtitle">Private Showcase</span>
            <h2 className="section-title">Experience Horizon First-Hand</h2>
            <p className="booking-p">
              Our Senior Private Client Advisors are at your service for personal presentations and exclusive site previews.
            </p>

            <div className="booking-contacts">
              <div className="booking-contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <span className="lbl">Direct Concierge</span>
                  <a href="tel:+917009970071" className="val">+91 70099 70071</a>
                </div>
              </div>
              <div className="booking-contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <span className="lbl">Advisory Email</span>
                  <a href="mailto:horizon@sdmajesta.com" className="val">horizon@sdmajesta.com</a>
                </div>
              </div>
              <div className="booking-contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <span className="lbl">Experience Gallery</span>
                  <span className="val">SD Majesta Experience Pavilion, Prime Boulevard</span>
                </div>
              </div>
            </div>
          </div>

          <div className="booking-form-wrap">
            {submitted ? (
              <div className="booking-success">
                <div className="success-mark">✓</div>
                <h3>Inquiry Registered</h3>
                <p>Thank you. An SD Majesta Private Wealth Advisor will contact you within 2 business hours.</p>
                <button onClick={() => setSubmitted(false)} className="btn btn-gold">Submit Another Request</button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="horizon-inquiry-form">
                <h3 className="form-header-title">Request Private Presentation</h3>
                <div className="input-group">
                  <label htmlFor="hor-name">Full Name *</label>
                  <input
                    id="hor-name"
                    type="text"
                    required
                    placeholder="e.g. Lord Sterling"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="input-row">
                  <div className="input-group">
                    <label htmlFor="hor-phone">Phone Number *</label>
                    <input
                      id="hor-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="hor-email">Email Address *</label>
                    <input
                      id="hor-email"
                      type="email"
                      required
                      placeholder="sterling@luxury.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="hor-config">Interested Configuration</label>
                  <select
                    id="hor-config"
                    value={formData.configuration}
                    onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
                  >
                    <option value="3 BHK Royal Residence">3 BHK Royal Residence (~2,450 sq.ft.)</option>
                    <option value="4 BHK Imperial Residence">4 BHK Imperial Residence (~3,650 sq.ft.)</option>
                    <option value="5 BHK Sky Penthouse">5 BHK Sky Penthouse (~6,200 sq.ft.)</option>
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="hor-msg">Notes / Preferences</label>
                  <textarea
                    id="hor-msg"
                    rows="3"
                    placeholder="Preferred time for a private preview call..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-gold btn-full">
                  Request Confidential Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="lightbox-backdrop" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImg} alt="Enlarged visual" className="lightbox-large-img" />
            <button className="lightbox-close" onClick={() => setLightboxImg(null)}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
