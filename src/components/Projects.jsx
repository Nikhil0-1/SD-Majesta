import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/assetPath';
import './Projects.css';

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects__header">
          <span className="section-label">Our Projects</span>
          <h2 className="section-title">
            Architectural <em className="gold">Excellence</em>
          </h2>
        </div>

        <div className="projects__showcase">
          {/* Horizon - Featured Project */}
          <Link to="/projects/horizon" className="project-card project-card--featured">
            <div className="project-card__image-wrapper">
              <img
                src={getAssetUrl('/assets/horizon_facade_1788700744631.jpg')}
                alt="Horizon luxury tower facade"
                className="project-card__image"
                loading="lazy"
              />
              <div className="project-card__overlay" />
            </div>
            <div className="project-card__content">
              <span className="project-card__label">Featured Project</span>
              <h3 className="project-card__title">Horizon</h3>
              <p className="project-card__desc">
                A landmark of modern luxury living, designed to redefine the
                urban skyline with sophisticated architecture and premium amenities.
              </p>
              <span className="project-card__cta">
                Explore Project
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </Link>

          {/* Upcoming Projects */}
          <div className="project-card project-card--upcoming">
            <div className="project-card__coming">
              <span className="project-card__label">Coming Soon</span>
              <h3 className="project-card__title project-card__title--small">
                New Projects
              </h3>
              <p className="project-card__desc">
                Extraordinary developments are on the horizon. Stay connected
                for exclusive previews.
              </p>
              <div className="gold-line" />
              <span className="project-card__notify">
                Register Your Interest
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
