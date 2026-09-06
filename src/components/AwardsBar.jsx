import './AwardsBar.css';

const awards = [
  {
    icon: '🏆',
    title: 'Best Ultra-Luxury Project',
    subtitle: 'National Real Estate Awards 2026'
  },
  {
    icon: '🌿',
    title: 'IGBC Gold Certified',
    subtitle: 'Green Building Excellence'
  },
  {
    icon: '🏛️',
    title: 'Architectural Eminence',
    subtitle: 'Global Design Conclave 2025'
  },
  {
    icon: '📜',
    title: 'RERA Approved',
    subtitle: '100% Legal & Clear Titles'
  }
];

export default function AwardsBar() {
  return (
    <div className="awards-bar">
      <div className="container awards-bar__inner">
        {awards.map((award, i) => (
          <div key={i} className="award-item">
            <span className="award-icon">{award.icon}</span>
            <div className="award-text">
              <h4 className="award-title">{award.title}</h4>
              <p className="award-subtitle">{award.subtitle}</p>
            </div>
            {i < awards.length - 1 && <span className="award-divider" />}
          </div>
        ))}
      </div>
    </div>
  );
}
