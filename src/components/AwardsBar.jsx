import { TrophyIcon, EcoIcon, PillarIcon, ShieldCheckIcon } from './Icons';
import './AwardsBar.css';

const awards = [
  {
    IconComponent: TrophyIcon,
    title: 'Best Ultra-Luxury Residence',
    subtitle: 'National Architecture Awards'
  },
  {
    IconComponent: EcoIcon,
    title: 'IGBC Gold Certified',
    subtitle: 'Sustainable Green Architecture'
  },
  {
    IconComponent: PillarIcon,
    title: 'Architectural Eminence',
    subtitle: 'Global Design Excellence'
  },
  {
    IconComponent: ShieldCheckIcon,
    title: 'RERA Approved',
    subtitle: '100% Clear Titles & Transparency'
  }
];

export default function AwardsBar() {
  return (
    <div className="awards-bar">
      <div className="container awards-bar__inner">
        {awards.map((award, i) => {
          const Icon = award.IconComponent;
          return (
            <div key={i} className="award-item">
              <div className="award-icon-box">
                <Icon className="award-svg-icon" />
              </div>
              <div className="award-text">
                <h4 className="award-title">{award.title}</h4>
                <p className="award-subtitle">{award.subtitle}</p>
              </div>
              {i < awards.length - 1 && <span className="award-divider" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
