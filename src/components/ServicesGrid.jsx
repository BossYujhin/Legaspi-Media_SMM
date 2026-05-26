import { services } from '../data/siteData.js';
import ServiceCard from './ServiceCard.jsx';

export default function ServicesGrid({ limit }) {
  const visibleServices = limit ? services.slice(0, limit) : services;

  return (
    <div className="services-grid">
      {visibleServices.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  );
}
