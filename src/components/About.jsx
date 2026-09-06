import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__grid">
        <div className="about__image-col">
          <div className="about__image-wrapper">
            <img
              src="/assets/lobby_interior_1788698961382.jpg"
              alt="SD Majesta luxury lobby interior"
              className="about__image"
              loading="lazy"
            />
          </div>
        </div>

        <div className="about__content">
          <span className="section-label">About SD Majesta</span>
          <h2 className="section-title">
            Building Spaces<br />
            That <em className="gold">Inspire</em>
          </h2>
          <div className="gold-line" />
          <p className="about__text">
            SD Majesta is a luxury real estate development brand focused on crafting
            refined residential and commercial spaces with modern architecture,
            timeless design, and elevated urban living experiences.
          </p>
          <p className="about__text about__text--secondary">
            Every project we undertake is a testament to our commitment to
            architectural excellence, uncompromising quality, and the art of
            creating spaces where luxury meets everyday living.
          </p>

          <div className="about__founders">
            <div className="about__founder">
              <h4 className="about__founder-name">Jash Sahilesh Desai</h4>
              <span className="about__founder-role">Co-Founder</span>
            </div>
            <div className="about__founder-divider" />
            <div className="about__founder">
              <h4 className="about__founder-name">Mukul Dharmendra Bhambhani</h4>
              <span className="about__founder-role">Co-Founder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
