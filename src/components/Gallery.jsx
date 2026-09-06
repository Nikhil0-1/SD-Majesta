import { useState } from 'react';
import './Gallery.css';

const images = [
  { src: '/assets/horizon_hero_1788698867073.jpg', alt: 'Horizon tower exterior', category: 'exterior' },
  { src: '/assets/lobby_interior_1788698961382.jpg', alt: 'Premium lobby interior', category: 'interior' },
  { src: '/assets/penthouse_living_1788699627316.jpg', alt: 'Penthouse living room', category: 'interior' },
  { src: '/assets/horizon_facade_1788700744631.jpg', alt: 'Horizon facade architectural view', category: 'exterior' },
  { src: '/assets/amenity_clubhouse_1788699091926.jpg', alt: 'Clubhouse interior', category: 'lifestyle' },
  { src: '/assets/amenity_pool_zen_1788699479837.jpg', alt: 'Zen garden and pool', category: 'lifestyle' },
];

const categories = ['all', 'exterior', 'interior', 'lifestyle'];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === 'all' ? images : images.filter(img => img.category === filter);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const nextImage = () => setLightbox((prev) => (prev + 1) % filtered.length);
  const prevImage = () => setLightbox((prev) => (prev - 1 + filtered.length) % filtered.length);

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery__header">
          <span className="section-label">Gallery</span>
          <h2 className="section-title">
            Visual <em className="gold">Journey</em>
          </h2>
        </div>

        <div className="gallery__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery__filter ${filter === cat ? 'gallery__filter--active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery__grid">
          {filtered.map((img, i) => (
            <div
              className={`gallery__item gallery__item--${i % 3 === 0 ? 'large' : 'normal'}`}
              key={img.src}
              onClick={() => openLightbox(i)}
              role="button"
              tabIndex={0}
              aria-label={`View ${img.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(i)}
            >
              <img src={img.src} alt={img.alt} className="gallery__image" loading="lazy" />
              <div className="gallery__item-overlay">
                <span className="gallery__view">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox" onClick={closeLightbox} role="dialog" aria-label="Image viewer">
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img src={filtered[lightbox].src} alt={filtered[lightbox].alt} className="lightbox__image" />
            <div className="lightbox__controls">
              <button className="lightbox__btn" onClick={prevImage} aria-label="Previous image">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
              <span className="lightbox__counter">
                {lightbox + 1} / {filtered.length}
              </span>
              <button className="lightbox__btn" onClick={nextImage} aria-label="Next image">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close viewer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
