import { useState } from 'react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    quote: 'The architectural precision at SD Majesta Horizon is unlike anything we have experienced in the country. From the high acoustic insulation to the expansive double-height ceilings, it is the purest expression of privacy and luxury.',
    author: 'Vikramaditya Singhania',
    role: 'Industrialist & Art Patron',
    residence: 'Horizon Sky Penthouse Resident'
  },
  {
    quote: 'As an architect, I am exceptionally demanding about structural finishes and facade engineering. SD Majesta has executed every millimetre with Italian stone craftsmanship and bespoke perfection.',
    author: 'Elena Rostova',
    role: 'International Design Consultant',
    residence: 'Horizon 4 BHK Imperial Suite'
  },
  {
    quote: 'The concierge hospitality and biometric security provide complete peace of mind. Coming home feels like stepping into an ultra-exclusive private sanctuary above the bustling city skyline.',
    author: 'Rajesh & Meera Kothari',
    role: 'Managing Partner, Equity Capital',
    residence: 'Horizon 3 BHK Royal Residence'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-subtitle">Client Endorsements</span>
          <h2 className="section-title">Voices of Distinction</h2>
        </div>

        <div className="testimonials-slider">
          <div className="quote-mark">“</div>
          <p className="testimonial-quote">{current.quote}</p>

          <div className="testimonial-author-meta">
            <h4 className="author-name">{current.author}</h4>
            <p className="author-role">{current.role}</p>
            <span className="author-residence">{current.residence}</span>
          </div>

          {/* Navigation Controls */}
          <div className="slider-controls">
            <button
              type="button"
              className="slider-nav-btn"
              onClick={prevSlide}
              aria-label="Previous Endorsement"
            >
              ←
            </button>
            <div className="slider-dots">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`slider-dot ${currentIndex === idx ? 'slider-dot--active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              className="slider-nav-btn"
              onClick={nextSlide}
              aria-label="Next Endorsement"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
