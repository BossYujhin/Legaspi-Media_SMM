import Button from './Button.jsx';

export default function ServiceCard({ service }) {
  return (
    <article className="service-card reveal-card">
      <div className="card-topline">
        <span>{service.eyebrow}</span>
        <i />
      </div>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <ul>
        {service.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <Button to="/contact" variant="text">Inquire now</Button>
    </article>
  );
}
