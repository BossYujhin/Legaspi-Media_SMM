import CTASection from '../components/CTASection.jsx';
import PricingCard from '../components/PricingCard.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import { pricingPlans } from '../data/siteData.js';

const addOns = ['Reel editing pack', 'Paid ads management', 'Landing page design', 'Brand photoshoot direction', 'Email campaign copy'];

export default function Pricing() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Pricing</span>
            <h1>Clear packages for brands ready to invest in premium growth.</h1>
          </div>
          <p>
            These packages are structured for easy selling. You can adjust the prices later based on your market, team capacity, and exact deliverables.
          </p>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="container">
          <SectionIntro
            eyebrow="Monthly support"
            title="Choose the level that fits your brand stage."
            text="The middle package is visually highlighted because it is usually the best balance for clients who want strategy and execution."
            align="center"
          />
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container add-ons-panel">
          <SectionIntro
            eyebrow="Optional add-ons"
            title="Upgrade your monthly package when you need more support."
            text="Add-ons make the offer more flexible without making the main packages confusing."
            light
          />
          <div className="add-ons-grid">
            {addOns.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Not sure which package fits? Book a brand review first." />
    </>
  );
}
