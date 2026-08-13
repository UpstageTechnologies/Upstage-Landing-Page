import { FiCheck } from 'react-icons/fi';
import Button from './Button';
import '../index.css';

export default function PricingCard({ plan }) {
  return (
    <div className={`pricing-card ${plan.mostPopular ? 'most-popular' : ''}`}>
      {plan.mostPopular && <div className="popular-badge">Most Popular</div>}
      
      <h3 className="plan-name">{plan.name}</h3>
      <p className="plan-description">{plan.description}</p>
      
      <div className="plan-price">
        <span className="price">{plan.price}</span>
        {plan.period && <span className="period">{plan.period}</span>}
      </div>

      {plan.deliveryTime && (
        <p className="delivery-time">
          <strong>Delivery:</strong> {plan.deliveryTime}
        </p>
      )}

      {plan.pages && (
        <p className="pages-info">
          <strong>{plan.pages}</strong>
        </p>
      )}

      {plan.screens && (
        <p className="screens-info">
          <strong>{plan.screens}</strong>
        </p>
      )}

      {plan.platforms && (
        <p className="platforms-info">
          <strong>Platforms:</strong> {plan.platforms}
        </p>
      )}
      
      <ul className="plan-features">
        {plan.features && plan.features.map((feature, index) => (
          <li key={index}>
            <FiCheck size={20} className="check-icon" />
            <span>{feature}</span>
          </li>
        ))}

        {plan.adminFeatures && plan.adminFeatures.map((feature, index) => (
          <li key={index}>
            <FiCheck size={20} className="check-icon" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {plan.technology && (
        <p className="technology-info">
          <strong>Technology:</strong> {plan.technology}
        </p>
      )}

      {plan.idealFor && plan.idealFor.length > 0 && (
        <div className="ideal-for">
          <strong>Ideal for:</strong>
          <p>{plan.idealFor.join(', ')}</p>
        </div>
      )}

      {plan.examples && plan.examples.length > 0 && (
        <div className="examples">
          <strong>Examples:</strong>
          <p>{plan.examples.join(', ')}</p>
        </div>
      )}

      {plan.note && (
        <p className="plan-note">{plan.note}</p>
      )}

      
    </div>
  );
}
