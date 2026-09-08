import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/assetPath';
import {
  PillarIcon,
  PoolIcon,
  EcoIcon,
  GymIcon,
  CinemaIcon,
  ShieldCheckIcon,
  PhoneIcon,
  MailIcon,
  PinIcon,
  CheckIcon
} from '../components/Icons';
import './ProjectHorizon.css';

const horizonAmenities = [
  {
    IconComponent: PillarIcon,
    title: 'Grand Entrance Foyer',
    desc: 'Triple-volume Italian marble lobby with bespoke sculptural lighting and 24/7 concierge.'
  },
  {
    IconComponent: PoolIcon,
    title: 'Sky Infinity Pool',
    desc: 'Temperature-controlled infinity pool perched above the skyline with private cabanas.'
  },
  {
    IconComponent: EcoIcon,
    title: 'Zen Sanctuary Gardens',
    desc: 'Curated elevated greens, meditative pavilions, and tranquil cascading water features.'
  },
  {
    IconComponent: GymIcon,
    title: 'Artisan Wellness & Spa',
    desc: 'Technogym-equipped fitness studio with private steam suites and yoga pavilion.'
  },
  {
    IconComponent: CinemaIcon,
    title: 'Private Screening Lounge',
    desc: 'Acoustically tuned private cinema with Dolby Atmos surround audio and plush recliners.'
  },
  {
    IconComponent: ShieldCheckIcon,
    title: 'Multi-Tier Security',
    desc: 'Biometric elevator access, touchless digital keys, and 24/7 guarded security ring.'
  }
];

const floorPlans = [
  {
    type: '3 BHK Royal Residence',
    area: '2,450 Sq. Ft.',
    balconies: '2 Private Decks',
    highlights: ['Corner residence with 270° views', 'Master suite with walk-in wardrobe', 'Separate staff quarters', 'Italian modular kitchen'],
    badge: 'Limited Series'
  },
  {
    type: '4 BHK Imperial Residence',
    area: '3,650 Sq. Ft.',
    balconies: '3 Expansive Terraces',
    highlights: ['Double-height living space', 'Direct private elevator into foyer', 'Freestanding soaking tub in master bath', 'Integrated smart home automation'],
    badge: 'Signature Series'
  },
  {
    type: '5 BHK Sky Penthouse',
    area: '6,200 Sq. Ft.',
    balconies: 'Private Rooftop & Plunge Pool',
    highlights: ['Crown duplex sky living', 'Private temperature-controlled pool', 'Dedicated private entertaining terrace', '3 covered parking bays'],
    badge: 'Collector’s Edition'
  }
];

const horizonGallery = [
  { src: '/assets/horizon_facade_1788700744631.jpg', title: 'Architectural Facade', tag: 'Exterior' },
  { src: '/assets/penthouse_living_1788699627316.jpg', title: 'Penthouse Living Room', tag: 'Interior' },
  { src: '/assets/lobby_interior_1788698961382.jpg', title: 'Grand Arrival Lobby', tag: 'Arrival' },
  { src: '/assets/amenity_pool_zen_1788699479837.jpg', title: 'Sky Infinity Pool', tag: 'Amenities' },
  { src: '/assets/amenity_clubhouse_1788699091926.jpg', title: 'Private Members Club', tag: 'Lifestyle' },
  { src: '/assets/amenity_fitness_1788699350560.jpg', title: 'Wellness Pavilion', tag: 'Fitness' }
];

export default function ProjectHorizon() {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', configuration: '4 BHK Imperial Residence', message: '' });
  const [submitted, setSubmitted] = useState(false);

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
            src={getAssetUrl('/assets/horizon_facade_1788700744631.jpg')}
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
            An architectural statement in timeless proportion, privacy, and craftsmanship.
          </p>

          <div className="horizon-hero__stats">
            <div className="horizon-stat">
              <span className="stat-val">32</span>
              <span className="stat-lbl">Storeys</span>
            </div>
            <div className="horizon-stat-divider" />
            <div className="horizon-stat">
              <span className="stat-val">74</span>
              <span className="stat-lbl">Residences</span>
            </div>
            <div className="horizon-stat-divider" />
            <div className="horizon-stat">
              <span className="stat-val">3 & 4 BHK</span>
              <span className="stat-lbl">+ Penthouses</span>
            </div>
            <div className="horizon-stat-divider" />
            <div className="horizon-stat">
              <span className="stat-val">Q4 2027</span>
              <span className="stat-lbl">Possession</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Overview */}
      <section className="horizon-overview container">
        <div className="horizon-overview__grid">
          <div className="horizon-overview__text">
            <span className="section-subtitle">Design Philosophy</span>
            <h2 className="section-title">Geometric Precision & Living Comfort</h2>
            <p className="horizon-p">
              Engineered to maximize natural daylight, airflow, and 270-degree skyline vistas. Hand-selected Carrara marble and custom architectural bronze appointments define every residence.
            </p>
            <p className="horizon-p">
              Each sky suite features private elevator foyer access, high acoustic insulation, and seamless touchless automation.
            </p>
            
            <div className="horizon-spec-pills">
              <div className="spec-pill">
                <CheckIcon className="spec-icon" />
                <span>11.5 Ft Clear Ceiling Height</span>
              </div>
              <div className="spec-pill">
                <CheckIcon className="spec-icon" />
                <span>Floor-to-Ceiling Thermal Glazing</span>
              </div>
              <div className="spec-pill">
                <CheckIcon className="spec-icon" />
                <span>IGBC Gold Certified Structure</span>
              </div>
              <div className="spec-pill">
                <CheckIcon className="spec-icon" />
                <span>Touchless Biometric Access</span>
              </div>
            </div>
          </div>

          <div className="horizon-overview__image-wrapper">
            <img
              src={getAssetUrl('/assets/penthouse_living_1788699627316.jpg')}
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
            <span className="section-subtitle">Configurations</span>
            <h2 className="section-title">Residences of Distinction</h2>
            <p className="residences-desc">
              Curated sky suites featuring expansive private terraces and uninterrupted panoramic views.
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
                      <span className="spec-check-icon"><CheckIcon /></span> {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="plan-actions">
                <a href="#horizon-inquire" className="btn btn-gold">Inquire For Pricing</a>
                <a href="#horizon-inquire" className="btn btn-outline">Schedule Preview</a>
              </div>
            </div>

            <div className="plan-detail-render">
              <img
                src={getAssetUrl(selectedPlan === 0 ? '/assets/lobby_interior_1788698961382.jpg' : selectedPlan === 1 ? '/assets/penthouse_living_1788699627316.jpg' : '/assets/horizon_hero_1788698867073.jpg')}
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
            <span className="section-subtitle">Curated Lifestyle</span>
            <h2 className="section-title">Private Resident Facilities</h2>
            <p className="amenities-subtext">Over 40,000 sq.ft. of curated indoor and alfresco club amenities.</p>
          </div>

          <div className="amenities-grid-luxury">
            {horizonAmenities.map((item, idx) => {
              const Icon = item.IconComponent;
              return (
                <div key={idx} className="luxury-amenity-card">
                  <div className="card-icon-box">
                    <Icon className="card-svg-icon" />
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.desc}</p>
                  <div className="card-glow" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Showcase Gallery */}
      <section className="horizon-gallery-section container">
        <div className="gallery-top">
          <div>
            <span className="section-subtitle">Visual Tour</span>
            <h2 className="section-title">Architectural Glimpses</h2>
          </div>
          <p className="gallery-hint">Click image to expand</p>
        </div>

        <div className="horizon-gallery-grid">
          {horizonGallery.map((item, idx) => (
            <div
              key={idx}
              className={`gallery-card-item ${idx === 0 ? 'span-two' : ''}`}
              onClick={() => setLightboxImg(item.src)}
            >
              <img src={getAssetUrl(item.src)} alt={item.title} className="gallery-thumb" />
              <div className="gallery-item-overlay">
                <span className="item-tag">{item.tag}</span>
                <h4 className="item-title">{item.title}</h4>
                <span className="item-expand-btn">View</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquire / Booking Section */}
      <section className="horizon-booking" id="horizon-inquire">
        <div className="container booking-grid">
          <div className="booking-info">
            <span className="section-subtitle">Private Consultation</span>
            <h2 className="section-title">Experience Horizon</h2>
            <p className="booking-p">
              Our Senior Private Client Advisors are at your service for personal presentations and confidential previews.
            </p>

            <div className="booking-contacts">
              <div className="booking-contact-item">
                <span className="contact-icon-box"><PhoneIcon /></span>
                <div>
                  <span className="lbl">Direct Desk</span>
                  <a href="tel:+917009970071" className="val">+91 70099 70071</a>
                </div>
              </div>
              <div className="booking-contact-item">
                <span className="contact-icon-box"><MailIcon /></span>
                <div>
                  <span className="lbl">Advisory Email</span>
                  <a href="mailto:horizon@sdmajesta.com" className="val">horizon@sdmajesta.com</a>
                </div>
              </div>
              <div className="booking-contact-item">
                <span className="contact-icon-box"><PinIcon /></span>
                <div>
                  <span className="lbl">Gallery</span>
                  <span className="val">SD Majesta Experience Center, Prime Boulevard</span>
                </div>
              </div>
            </div>
          </div>

          <div className="booking-form-wrap">
            {submitted ? (
              <div className="booking-success">
                <div className="success-mark"><CheckIcon /></div>
                <h3>Inquiry Registered</h3>
                <p>An SD Majesta Private Wealth Advisor will contact you shortly.</p>
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
                    placeholder="e.g. Rohan Singhania"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="input-row">
                  <div className="input-group">
                    <label htmlFor="hor-phone">Phone *</label>
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
                    <label htmlFor="hor-email">Email *</label>
                    <input
                      id="hor-email"
                      type="email"
                      required
                      placeholder="client@luxury.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="hor-config">Configuration</label>
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
            <img src={getAssetUrl(lightboxImg)} alt="Enlarged visual" className="lightbox-large-img" />
            <button className="lightbox-close" onClick={() => setLightboxImg(null)}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
