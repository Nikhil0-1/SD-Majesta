import { useState, useId } from 'react';
import './InvestmentCalculator.css';

const RESIDENCE_PRESETS = [
  { name: '3 BHK Royal Suite', price: 45000000, label: '₹4.50 Cr' },
  { name: '4 BHK Imperial Suite', price: 72000000, label: '₹7.20 Cr' },
  { name: '5 BHK Sky Penthouse', price: 145000000, label: '₹14.50 Cr' }
];

export default function InvestmentCalculator() {
  const [propertyPrice, setPropertyPrice] = useState(72000000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(25);
  const [tenureYears, setTenureYears] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);

  const priceInputId = useId();
  const dpInputId = useId();
  const tenureInputId = useId();
  const rateInputId = useId();

  // Calculations
  const downPaymentAmount = (propertyPrice * downPaymentPercent) / 100;
  const loanPrincipal = propertyPrice - downPaymentAmount;
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  const monthlyEmi = Math.round(
    (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const totalPayment = monthlyEmi * totalMonths;
  const totalInterest = totalPayment - loanPrincipal;

  const formatCurrency = (val) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakh`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <section className="inv-calc-section" id="investment-calculator">
      <div className="container">
        <div className="inv-calc-header">
          <span className="section-subtitle">Financial Planning</span>
          <h2 className="section-title">Luxury Residence Investment Estimator</h2>
          <p className="inv-calc-desc">
            Calculate your acquisition outflow, bespoke customized down payments, and preferred monthly EMI schedules.
          </p>
        </div>

        {/* Preset Selectors */}
        <div className="residence-chips">
          {RESIDENCE_PRESETS.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              className={`residence-chip ${propertyPrice === preset.price ? 'residence-chip--active' : ''}`}
              onClick={() => setPropertyPrice(preset.price)}
            >
              <span className="chip-name">{preset.name}</span>
              <span className="chip-price">{preset.label}</span>
            </button>
          ))}
        </div>

        <div className="inv-calc-grid">
          {/* Controls */}
          <div className="inv-calc-controls">
            <div className="calc-group">
              <div className="calc-group-header">
                <label htmlFor={priceInputId}>Total Residence Valuation</label>
                <span className="calc-val-badge">{formatCurrency(propertyPrice)}</span>
              </div>
              <input
                id={priceInputId}
                type="range"
                min="30000000"
                max="250000000"
                step="2500000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="gold-slider"
              />
              <div className="slider-hints">
                <span>₹3.0 Cr</span>
                <span>₹25.0 Cr</span>
              </div>
            </div>

            <div className="calc-group">
              <div className="calc-group-header">
                <label htmlFor={dpInputId}>Down Payment ({downPaymentPercent}%)</label>
                <span className="calc-val-badge">{formatCurrency(downPaymentAmount)}</span>
              </div>
              <input
                id={dpInputId}
                type="range"
                min="20"
                max="60"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="gold-slider"
              />
              <div className="slider-hints">
                <span>20%</span>
                <span>60%</span>
              </div>
            </div>

            <div className="calc-group-row">
              <div className="calc-group">
                <div className="calc-group-header">
                  <label htmlFor={tenureInputId}>Tenure</label>
                  <span className="calc-val-badge">{tenureYears} Years</span>
                </div>
                <input
                  id={tenureInputId}
                  type="range"
                  min="5"
                  max="25"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="gold-slider"
                />
                <div className="slider-hints">
                  <span>5 Yrs</span>
                  <span>25 Yrs</span>
                </div>
              </div>

              <div className="calc-group">
                <div className="calc-group-header">
                  <label htmlFor={rateInputId}>Interest Rate</label>
                  <span className="calc-val-badge">{interestRate}%</span>
                </div>
                <input
                  id={rateInputId}
                  type="range"
                  min="7.5"
                  max="11.5"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="gold-slider"
                />
                <div className="slider-hints">
                  <span>7.5%</span>
                  <span>11.5%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="inv-calc-results">
            <div className="results-header">
              <span className="results-sub">Estimated Monthly Outflow</span>
              <div className="results-emi">{formatCurrency(monthlyEmi)}<span>/month</span></div>
            </div>

            <div className="results-breakdown-bar">
              <div
                className="breakdown-segment segment-principal"
                style={{ width: `${(loanPrincipal / totalPayment) * 100}%` }}
                title="Principal Amount"
              />
              <div
                className="breakdown-segment segment-interest"
                style={{ width: `${(totalInterest / totalPayment) * 100}%` }}
                title="Interest Amount"
              />
            </div>

            <div className="breakdown-legend">
              <div className="legend-item">
                <span className="legend-color legend-color--principal" />
                <span>Principal: {formatCurrency(loanPrincipal)}</span>
              </div>
              <div className="legend-item">
                <span className="legend-color legend-color--interest" />
                <span>Interest: {formatCurrency(totalInterest)}</span>
              </div>
            </div>

            <div className="results-specs-list">
              <div className="spec-row">
                <span>Down Payment Outlay</span>
                <strong>{formatCurrency(downPaymentAmount)}</strong>
              </div>
              <div className="spec-row">
                <span>Total Loan Amount</span>
                <strong>{formatCurrency(loanPrincipal)}</strong>
              </div>
              <div className="spec-row">
                <span>Total Payment (Principal + Interest)</span>
                <strong>{formatCurrency(totalPayment)}</strong>
              </div>
            </div>

            <div className="calc-actions">
              <a
                href="#connect"
                className="btn btn-gold btn-full"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#connect')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Request Custom Payment Schedule
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
