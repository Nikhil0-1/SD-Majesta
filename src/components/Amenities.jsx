import { useState } from 'react';
import { getAssetUrl } from '../utils/assetPath';
import './Amenities.css';

const amenities = [
  {
    id: 'clubhouse',
    title: 'Clubhouse',
    description: 'A sophisticated social space designed for refined gatherings, featuring premium interiors and an ambiance that reflects the SD Majesta lifestyle.',
    image: '/assets/amenity_clubhouse_1788699091926.jpg',
  },
  {
    id: 'fitness',
    title: 'Fitness Center',
    description: 'State-of-the-art fitness facility equipped with premium equipment, designed for a complete wellness experience in an inspiring environment.',
    image: '/assets/amenity_fitness_1788699350560.jpg',
  },
  {
    id: 'landscape',
    title: 'Landscape Garden',
    description: 'Meticulously designed zen gardens and landscaped areas providing serene retreats within the urban landscape.',
    image: '/assets/amenity_pool_zen_1788699479837.jpg',
  },
  {
    id: 'security',
    title: 'Smart Security',
    description: 'Advanced multi-layered security systems ensuring peace of mind with cutting-edge surveillance and access control technology.',
    image: '/assets/amenity_security_1788699964450.jpg',
  },
  {
    id: 'parking',
    title: 'Premium Parking',
    description: 'Spacious, well-lit parking facilities with modern design, providing secure and convenient access for residents and guests.',
    image: '/assets/amenity_parking_1788700049341.jpg',
  },
];

export default function Amenities() {
  const [active, setActive] = useState(0);

  return (
    <section className="amenities" id="amenities">
      <div className="container">
        <div className="amenities__header">
          <span className="section-label">Amenities</span>
          <h2 className="section-title">
            Curated <em className="gold">Living</em>
          </h2>
          <p className="section-subtitle">
            Every amenity has been thoughtfully designed to elevate your daily experience.
          </p>
        </div>

        <div className="amenities__explorer">
          <div className="amenities__visual">
            {amenities.map((amenity, i) => (
              <img
                key={amenity.id}
                src={getAssetUrl(amenity.image)}
                alt={amenity.title}
                className={`amenities__image ${i === active ? 'amenities__image--active' : ''}`}
                loading="lazy"
              />
            ))}
            <div className="amenities__visual-overlay" />
            <div className="amenities__visual-counter">
              <span className="amenities__counter-current">{String(active + 1).padStart(2, '0')}</span>
              <span className="amenities__counter-sep">/</span>
              <span className="amenities__counter-total">{String(amenities.length).padStart(2, '0')}</span>
            </div>
          </div>

          <div className="amenities__nav">
            {amenities.map((amenity, i) => (
              <button
                key={amenity.id}
                className={`amenities__nav-item ${i === active ? 'amenities__nav-item--active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`View ${amenity.title}`}
              >
                <span className="amenities__nav-number">{String(i + 1).padStart(2, '0')}</span>
                <div className="amenities__nav-content">
                  <h4 className="amenities__nav-title">{amenity.title}</h4>
                  {i === active && (
                    <p className="amenities__nav-desc">{amenity.description}</p>
                  )}
                </div>
                <span className="amenities__nav-line" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
