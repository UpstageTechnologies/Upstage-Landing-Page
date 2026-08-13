import { 
  FiGlobe, 
  FiSmartphone, 
  FiRefreshCw, 
  FiCode 
} from 'react-icons/fi';
import '../index.css';

const iconMap = {
  FiGlobe: FiGlobe,
  FiSmartphone: FiSmartphone,
  FiRefreshCw: FiRefreshCw,
  FiCode: FiCode
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.icon] || FiGlobe;

  return (
    <div className="service-card">
      <div className="service-icon">
        <IconComponent size={40} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
}
