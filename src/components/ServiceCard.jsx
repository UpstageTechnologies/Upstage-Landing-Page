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

  const handleClick =()=> {
    if (service.type === "external") {
      window.location.href = service.link;
    }
    else{
      navigate(service.link);
    }
  }
  return (
    <div className="service-card"
      onClick={handleClick}
      style={{cursor: "pointer"}}
    
    >
      <div className="service-icon">
        <IconComponent size={40} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
}
