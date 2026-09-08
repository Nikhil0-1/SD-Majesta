import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/assetPath';
import './Hero.css';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero__image-wrapper">
        <img
          src={getAssetUrl('/assets/horizon_hero_1788698867073.jpg')}
          alt="Horizon luxury tower by SD Majesta"
          className={`hero__image ${loaded ? 'hero__image--loaded' : ''}`}
          loading="eager"
        />
        <div className="hero__overlay" />
      </div>

      <div className={`hero__content container ${loaded ? 'hero__content--visible' : ''}`}>
        <div className="hero__label">
          <span className="hero__label-line" />
          <span>Luxury Real Estate</span>
        </div>

        <h1 className="hero__title">
          Elevating<br />
          Urban <em>Luxury</em>
        </h1>

        <p className="hero__subtitle">
          Premium residences crafted with timeless architecture<br className="hero__br" />
          and modern sophistication.
        </p>

        <div className="hero__actions">
          <Link to="/projects/horizon" className="btn btn-gold">
            Explore Horizon
          </Link>
          <a href="#connect" className="btn btn-outline" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#connect')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Schedule a Visit
          </a>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}
