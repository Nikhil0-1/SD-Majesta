import { useState } from 'react';
import './LocationHighlights.css';

const LOCATIONS = [
  {
    category: 'Transit & Airport',
    items: [
      { name: 'International Airport', distance: '22 Mins', desc: 'Direct signal-free elevated corridor access' },
      { name: 'Central Metro Hub', distance: '04 Mins', desc: 'Seamless high-speed metro transit line' },
      { name: 'Express Highway Junction', distance: '06 Mins', desc: 'Rapid arterial connection to all major commercial hubs' }
    ]
  },
  {
    category: 'Leisure & Golf',
    items: [
      { name: 'Championship Golf Club', distance: '05 Mins', desc: '18-hole signature course & luxury clubhouse' },
      { name: 'The Galleria Luxury Mall', distance: '08 Mins', desc: 'Flagship designer boutiques & fine-dining terrace' },
      { name: 'Botanical Gardens & Lake', distance: '07 Mins', desc: 'Scenic jogging boardwalk and waterfront cafe' }
    ]
  },
  {
    category: 'Business & Financial',
    items: [
      { name: 'World Financial City (WFC)', distance: '12 Mins', desc: 'Home to Fortune 500 corporate headquarters' },
      { name: 'Cyber Hub Tech Park', distance: '14 Mins', desc: 'Premier technology and venture capital district' },
      { name: 'Embassy Diplomatic Enclave', distance: '15 Mins', desc: 'Consulates and high commission zone' }
    ]
  },
  {
    category: 'Healthcare & Academics',
    items: [
      { name: 'The Heritage International Academy', distance: '08 Mins', desc: 'World-renowned IB curriculum campus' },
      { name: 'Medanta Super-Speciality Hospital', distance: '10 Mins', desc: 'Multi-speciality tertiary care medical institute' },
      { name: 'St. Xavier’s World School', distance: '12 Mins', desc: 'Premier institution for arts and sciences' }
    ]
  }
];

export default function LocationHighlights() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="location-section" id="location">
      <div className="container">
        <div className="location-header">
          <span className="section-subtitle">Prime Strategic Address</span>
          <h2 className="section-title">Connected To Everything That Matters</h2>
          <p className="location-subtitle-text">
            Situated at the nexus of prestige and convenience, Horizon places you moments from premier golf courses, international hubs, and cultural landmarks.
          </p>
        </div>

        {/* Categories Navigation */}
        <div className="location-nav">
          {LOCATIONS.map((loc, idx) => (
            <button
              key={idx}
              type="button"
              className={`location-tab ${activeTab === idx ? 'location-tab--active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              {loc.category}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="location-cards-grid">
          {LOCATIONS[activeTab].items.map((item, idx) => (
            <div key={idx} className="location-item-card">
              <div className="item-time-badge">
                <span className="time-val">{item.distance.split(' ')[0]}</span>
                <span className="time-unit">{item.distance.split(' ')[1]}</span>
              </div>
              <div className="item-details">
                <h4 className="item-name">{item.name}</h4>
                <p className="item-desc">{item.desc}</p>
              </div>
              <div className="item-corner-accent" />
            </div>
          ))}
        </div>

        {/* Map Preview Banner */}
        <div className="location-map-banner">
          <div className="map-banner-content">
            <span className="map-badge">Live Map Coordinates</span>
            <h3>Explore Our Experience Center On Google Maps</h3>
            <p>Experience the tranquil grandeur of the neighborhood in person with valet parking on arrival.</p>
            <a
              href="https://maps.google.com/?q=SD+Majesta+Horizon"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
