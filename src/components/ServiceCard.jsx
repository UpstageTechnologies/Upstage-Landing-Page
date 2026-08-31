import { 
  FiGlobe, 
  FiSmartphone, 
  FiRefreshCw, 
  FiCode, 
  FiAward, 
  FiHeadphones, 
  FiSmile
} from 'react-icons/fi';
import '../index.css';
import { useNavigate } from 'react-router-dom';

const iconMap = {
  FiGlobe: FiGlobe,
  FiSmartphone: FiSmartphone,
  FiRefreshCw: FiRefreshCw,
  FiCode: FiCode,
  FiAward: FiAward,
  FiHeadphones: FiHeadphones,
  FiSmile: FiSmile
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.icon] || FiGlobe;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${service.id}`);
  };
  return (
    <div className="service-card"
      onClick={handleClick}
      role="button"
      tabIndex={0}>
      <div className="service-icon">
        <IconComponent size={40} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
}
