import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import './Services.css';

export default function Services() {
  return (
    <main className="services">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <h1>Our Services</h1>
          <p>We provide end-to-end digital solutions to help your business establish a strong online presence.</p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </main>
  );
}
