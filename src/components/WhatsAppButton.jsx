import { useState } from 'react';
import { CalendarIcon, BuildingIcon, BellIcon, DocumentIcon } from './Icons';
import './WhatsAppButton.css';

const PRESET_OPTIONS = [
  {
    id: 'visit',
    title: 'Schedule Site Visit',
    tag: 'Private Preview',
    Icon: CalendarIcon,
    defaultMsg: 'Hello SD Majesta, I would like to schedule a private site visit for Horizon residences. Please share available dates and times.'
  },
  {
    id: 'inquire',
    title: 'Inquire About Horizon',
    tag: '3 & 4 BHK + Penthouse',
    Icon: BuildingIcon,
    defaultMsg: 'Hello SD Majesta, I am interested in the Horizon Sky Residences. Please share configuration details, availability, and pricing.'
  },
  {
    id: 'desk',
    title: 'Concierge Desk',
    tag: 'Direct Assistance',
    Icon: BellIcon,
    defaultMsg: 'Hello SD Majesta Concierge Desk, I am looking for direct assistance regarding your luxury real estate developments.'
  },
  {
    id: 'brochure',
    title: 'Brochure & Price List',
    tag: 'Floor Plans & Cost Sheet',
    Icon: DocumentIcon,
    defaultMsg: 'Hello SD Majesta, please send me the official Horizon brochure, architectural floor plans, and current price schedule.'
  }
];

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(PRESET_OPTIONS[0].id);
  const [customMsg, setCustomMsg] = useState(PRESET_OPTIONS[0].defaultMsg);
  const [userName, setUserName] = useState('');

  const phone = '917009970071';

  const handleSelectOption = (option) => {
    setSelectedOption(option.id);
    let msg = option.defaultMsg;
    if (userName.trim()) {
      msg = `Hello SD Majesta, my name is ${userName.trim()}. ` + option.defaultMsg.replace('Hello SD Majesta, ', '');
    }
    setCustomMsg(msg);
  };

  const handleNameChange = (name) => {
    setUserName(name);
    const activePreset = PRESET_OPTIONS.find((opt) => opt.id === selectedOption) || PRESET_OPTIONS[0];
    let msg = activePreset.defaultMsg;
    if (name.trim()) {
      msg = `Hello SD Majesta, my name is ${name.trim()}. ` + activePreset.defaultMsg.replace('Hello SD Majesta, ', '');
    }
    setCustomMsg(msg);
  };

  const handleSend = () => {
    const finalMsg = encodeURIComponent(customMsg);
    window.open(`https://wa.me/${phone}?text=${finalMsg}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="wa-widget-container">
      {/* Floating Toggle Button */}
      <button
        type="button"
        className={`wa-toggle-btn ${isOpen ? 'wa-toggle-btn--active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle WhatsApp Concierge Desk"
        id="whatsapp-cta"
      >
        <div className="wa-btn-icon-wrapper">
          {isOpen ? (
            <span className="wa-close-icon">✕</span>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          )}
        </div>
        <span className="wa-toggle-ping" />
        <div className="wa-toggle-label">
          <span className="wa-label-status" />
          <span>Concierge</span>
        </div>
      </button>

      {/* Interactive Modal / Card */}
      {isOpen && (
        <div className="wa-chat-card" role="dialog" aria-modal="true">
          {/* Header */}
          <div className="wa-card-header">
            <div className="wa-avatar-wrap">
              <div className="wa-avatar">SD</div>
              <span className="wa-online-dot" />
            </div>
            <div className="wa-header-info">
              <h4 className="wa-header-title">SD Majesta Desk</h4>
              <p className="wa-header-sub">Private Client Advisory · Online</p>
            </div>
            <button
              type="button"
              className="wa-header-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close Concierge"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="wa-card-body">
            <div className="wa-bubble-intro">
              Select an inquiry type to generate an instant message to our private desk:
            </div>

            {/* Quick Option Buttons with SVG Icons */}
            <div className="wa-options-list">
              {PRESET_OPTIONS.map((opt) => {
                const IconComponent = opt.Icon;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    className={`wa-option-pill ${selectedOption === opt.id ? 'wa-option-pill--active' : ''}`}
                    onClick={() => handleSelectOption(opt)}
                  >
                    <div className="wa-option-icon-wrap">
                      <IconComponent className="wa-option-svg" />
                    </div>
                    <div className="wa-option-pill__text">
                      <span className="wa-option-pill__title">{opt.title}</span>
                      <span className="wa-option-pill__tag">{opt.tag}</span>
                    </div>
                    <span className="wa-option-pill__arrow">→</span>
                  </button>
                );
              })}
            </div>

            {/* User Name Field */}
            <div className="wa-name-field">
              <label htmlFor="wa-input-name">Your Name (Optional)</label>
              <input
                id="wa-input-name"
                type="text"
                placeholder="e.g. Rohan Sharma"
                value={userName}
                onChange={(e) => handleNameChange(e.target.value)}
              />
            </div>

            {/* Live Message Preview */}
            <div className="wa-preview-box">
              <div className="wa-preview-header">
                <span className="wa-preview-title">Generated Message</span>
                <span className="wa-preview-status">Ready</span>
              </div>
              <textarea
                className="wa-preview-textarea"
                rows="3"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
              />
            </div>
          </div>

          {/* Footer CTA */}
          <div className="wa-card-footer">
            <button
              type="button"
              className="wa-send-btn"
              onClick={handleSend}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Connect on WhatsApp</span>
            </button>
            <div className="wa-footer-note">
              Encrypted direct channel with SD Majesta advisors
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
