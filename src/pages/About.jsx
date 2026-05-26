import Button from '../components/Button.jsx';
import CTASection from '../components/CTASection.jsx';
import ParallaxMedia from '../components/ParallaxMedia.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import StatsGrid from '../components/StatsGrid.jsx';
import { values } from '../data/siteData.js';

export default function About() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">About Legaspi Media</span>
            <h1>We build powerful content and design that tell stories, build brands, and drive impact.</h1>
          </div>
          <p>
            Legaspi Media is a premium social media and creative agency for brands that need a stronger presence, cleaner strategy, and a visual identity that feels bold, modern, and high-value.
          </p>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="container editorial-grid reverse">
          <div className="editorial-copy">
            <span className="eyebrow">Our story</span>
            <h2>More than design. We build brand experiences.</h2>
            <p>
              We believe social media should not feel random. Every post, reel, caption, website section, and campaign should support a clear brand position. Our work combines luxury design, audience insight, and practical marketing execution.
            </p>
            <p>
              The direction is cinematic and bold, but the business goal stays simple: make the brand easier to trust, remember, and choose.
            </p>
            <Button to="/services">See our services</Button>
          </div>
          <div className="brand-board-card">
            <ParallaxMedia
              src="/images/legaspi-web-reference.jpg"
              alt="Legaspi Media website mockup"
              speed={0.1}
            />
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container about-values-grid">
          <SectionIntro
            eyebrow="What we value"
            title="Bold. Strategic. Creative. Impactful."
            text="The website theme keeps the strong mood of the original mockup while making the layout clearer, more professional, and more client-ready."
            light
          />
          <div className="values-list">
            {values.map((value) => (
              <div key={value}>
                <span>✦</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="container split-section">
          <SectionIntro
            eyebrow="Proof of direction"
            title="Premium design needs a clear business purpose."
            text="This design gives clients a faster understanding of what you do, why your agency feels different, and where they should click next."
          />
          <StatsGrid />
        </div>
      </section>

      <CTASection title="Let’s turn your brand mood into a complete market-ready system." />
    </>
  );
}
