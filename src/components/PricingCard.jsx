import Button from './Button.jsx';

export default function PricingCard({ plan }) {
  return (
    <article className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
      {plan.featured && <span className="plan-badge">Most selected</span>}
      <h3>{plan.name}</h3>
      <p>{plan.note}</p>
      <div className="price-row">
        <strong>{plan.price}</strong>
        <span>/ month</span>
      </div>
      <ul>
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <Button to="/contact" variant={plan.featured ? 'primary' : 'secondary'}>
        Start this plan
      </Button>
    </article>
  );
}
