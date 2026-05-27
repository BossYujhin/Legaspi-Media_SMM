import Button from './Button.jsx';

export default function CTASection({ id, title = 'Ready to make your brand impossible to ignore?', text = 'Let’s build a premium content system that looks expensive, feels strategic, and brings better inquiries.' }) {
  return (
    <section id={id} className="cta-section">
      <div className="container cta-card">
        <div>
          <span className="eyebrow">Book your brand review</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <Button to="/contact">Book a Call</Button>
          <Button to="/portfolio" variant="secondary">View Portfolio</Button>
        </div>
      </div>
    </section>
  );
}
