import BrandMarquee from '../components/BrandMarquee.jsx';
import Button from '../components/Button.jsx';
import CTASection from '../components/CTASection.jsx';
import ParallaxMedia from '../components/ParallaxMedia.jsx';
import PortfolioGrid from '../components/PortfolioGrid.jsx';
import ProcessTimeline from '../components/ProcessTimeline.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';
import StatsGrid from '../components/StatsGrid.jsx';
import TestimonialGrid from '../components/TestimonialGrid.jsx';

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-bg-noise" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Strategic media & luxury SMM</span>
            <h1>
              We create brands that <em>lead the market.</em>
            </h1>
            <p>
              Legaspi Media builds premium social identities, content campaigns, and conversion systems for ambitious brands that want to look high-value and grow with intention.
            </p>
            <div className="hero-actions">
              <Button to="/contact">Book a Discovery Call</Button>
              <Button to="/portfolio" variant="secondary">View Our Work</Button>
            </div>
          </div>

          <div className="hero-showcase" aria-label="Luxury social media campaign preview">
            <div className="showcase-card main-card">
              <ParallaxMedia
                src="/images/legaspi-logo.jpg"
                alt="Legaspi Media logo"
                className="hero-parallax-media"
                speed={0.1}
                loading="eager"
              />
              <div className="glow-ring" />
            </div>
            <div className="floating-panel panel-one">
              <span>Campaign impact</span>
              <strong>3.8x</strong>
              <small>average engagement lift</small>
            </div>
            <div className="floating-panel panel-two">
              <span>Brand system</span>
              <strong>Noir / Red / Ivory</strong>
            </div>
          </div>
        </div>
        <BrandMarquee />
      </section>

      <section className="section section-ivory">
        <div className="container split-section">
          <SectionIntro
            eyebrow="Market-ready positioning"
            title="Not just attractive. Built to convert attention into trust."
            text="The original mockup had a strong cinematic identity. This version keeps the bold red and black luxury feel, but adds cleaner spacing, lighter premium sections, sharper CTAs, and clearer service messaging for real buyers."
          />
          <StatsGrid />
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionIntro
            eyebrow="What we do"
            title="Strategy. Design. Growth."
            text="A complete creative and social media partner for brands that need direction, consistency, and a premium online presence."
            align="center"
            light
          />
          <ServicesGrid limit={3} />
          <div className="center-action">
            <Button to="/services" variant="secondary">Explore all services</Button>
          </div>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="container editorial-grid">
          <div className="editorial-image">
            <ParallaxMedia
              src="/images/legaspi-moodboard.jpg"
              alt="Legaspi Media mood board"
              speed={0.12}
            />
          </div>
          <div className="editorial-copy">
            <span className="eyebrow">Brand essence</span>
            <h2>Bold visuals with a cleaner buyer journey.</h2>
            <p>
              The improved direction uses cinematic red accents, premium ivory sections, modern cards, and editorial layouts. It feels luxurious without making the whole site too dark or hard to read.
            </p>
            <ul className="check-list">
              <li>More readable sections for buyers</li>
              <li>Premium contrast using red, black, ivory, and champagne</li>
              <li>Clear call-to-action flow from hero to contact</li>
              <li>Responsive design for mobile and desktop</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-redline">
        <div className="container">
          <SectionIntro
            eyebrow="Featured work"
            title="Campaigns that look premium and perform."
            text="Each project is presented as a business result, not just a pretty visual. That makes the portfolio more convincing for clients."
            align="center"
          />
          <PortfolioGrid limit={3} />
        </div>
      </section>

      <section className="section section-dark pattern-section">
        <div className="container">
          <SectionIntro
            eyebrow="Our process"
            title="A clear creative system from idea to scale."
            text="Clients do not only buy design. They buy clarity, confidence, and a system they can trust."
            align="center"
            light
          />
          <ProcessTimeline />
        </div>
      </section>

      <section className="section section-ivory">
        <div className="container">
          <SectionIntro
            eyebrow="Client response"
            title="Brands choose us because the work feels intentional."
            text="The tone is premium, but the message stays simple and direct."
            align="center"
          />
          <TestimonialGrid />
        </div>
      </section>

      <CTASection />
    </>
  );
}
