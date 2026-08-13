import { FiCheck } from 'react-icons/fi';
import Button from './Button';
import '../index.css';

export default function PricingCard({ plan }) {
  return (
    <div className="pricing-card">
      <h3 className="plan-name">{plan.name}</h3>
      <p className="plan-subtitle">{plan.subtitle}</p>
      
      <div className="plan-price">
        <span className="price">{plan.price}</span>
        <span className="period">{plan.period}</span>
      </div>
      
      <ul className="plan-features">
        {plan.features.map((feature, index) => (
          <li key={index}>
            <FiCheck size={20} className="check-icon" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
