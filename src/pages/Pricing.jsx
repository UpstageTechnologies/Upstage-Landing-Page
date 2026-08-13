import PricingCard from '../components/PricingCard';
import { pricingPlans } from '../data/pricing';
import './Pricing.css';

export default function Pricing() {
  return (
    <main className="pricing">
      <div className="pricing-container">
        {/* Header */}
        <div className="pricing-header">
          <h1>Flexible Packages For Every Business</h1>
          <p>Choose the perfect plan that fits your needs.</p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {pricingPlans.map(plan => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="pricing-footer">
          <p>Need a custom plan? <a href="#contact">Contact us</a> to discuss your unique requirements.</p>
        </div>
      </div>
    </main>
  );
}
