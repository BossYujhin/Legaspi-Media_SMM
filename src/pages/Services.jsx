import CTASection from '../components/CTASection.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';

const deliverables = [
  'Premium visual direction',
  'Monthly content calendar',
  'Campaign planning',
  'Carousel and static designs',
  'Short-form video concepts',
  'Caption and copywriting',
  'Community engagement support',
  'Monthly performance reporting',
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Services</span>
            <h1>Tailored solutions for bold brands that want premium attention.</h1>
          </div>
          <p>
            Choose a focused service or let us build a complete creative system. Every solution is structured to make your brand more recognizable, trusted, and conversion-ready.
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionIntro
            eyebrow="Agency capabilities"
            title="Everything your social brand needs to look polished and grow consistently."
            text="Each service can stand alone or combine into a full monthly marketing package."
            align="center"
            light
          />
          <ServicesGrid />
        </div>
      </section>

      <section className="section section-ivory">
        <div className="container deliverables-panel">
          <SectionIntro
            eyebrow="What can be included"
            title="A luxury SMM system with clear deliverables."
            text="This helps clients understand exactly what they can expect from the agency before they inquire."
          />
          <div className="deliverables-grid">
            {deliverables.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Need a custom package for your brand launch or monthly content?" />
    </>
  );
}
