import { useState } from 'react';
import PricingCard from '../components/PricingCard';
import { pricingPlans, appPricingPlans } from '../data/pricing';
import Button from '../components/Button';
import './Pricing.css';
import { Link, useLocation } from 'react-router-dom';

export default function Pricing() {
  const location = useLocation();

  const [showWebPackages, setShowWebPackages] = useState(
      location.state?.openSection === "web-development"
  );

  const [showAppPackages, setShowAppPackages] = useState(
      location.state?.openSection === "app-development"
  );
  
  const handleWebButton = () => {
    setShowWebPackages(!showWebPackages);
    setShowAppPackages(false);
  }

  const handleAppButton = () => {
    setShowAppPackages(!showAppPackages);
    setShowWebPackages(false);
  }

  return (
    <main className="pricing">
      <div className="pricing-container">
        {/* Header */}
        <div className="pricing-header">
          <h1>Flexible Packages For Every Business</h1>
          <p>Choose the perfect plan that fits your needs.</p>
        </div>

        <div className="pricing-cards">
          <Button variant="teritary" onClick={handleWebButton}>
            {showWebPackages ? 'Hide' : 'Web Development (US Packages)'}
          </Button>
          <Button variant="teritary" onClick={handleAppButton}>
            {showAppPackages ? 'Hide' : 'App Development (US Packages)'}
          </Button>
        </div>

        {/* Web Pricing Cards Grid */}
        {showWebPackages && (
          <>
          <div className="pricing-grid">
            {pricingPlans.map(plan => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
           <div className="note">
              <p> <strong style={{fontWeight: "bold", color:"#0a0a0a"}}>Note:</strong> Quote adds $1000-$10,000+ depending on scope.</p>
            </div>
            </>
        )}

        {/* App Pricing Cards Grid */}
        {showAppPackages && (
          <div className="pricing-grid">
            {appPricingPlans.map(plan => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        )}

        {/* Additional Info */}
        <div className="pricing-footer">
          <p>Need a custom plan? <Link to="/contact">Contact us</Link> to discuss your unique requirements.</p>
        </div>
      </div>
    </main>
  );
}
