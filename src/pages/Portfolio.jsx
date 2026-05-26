import Button from '../components/Button.jsx';
import CTASection from '../components/CTASection.jsx';
import ParallaxMedia from '../components/ParallaxMedia.jsx';
import PortfolioGrid from '../components/PortfolioGrid.jsx';
import SectionIntro from '../components/SectionIntro.jsx';

export default function Portfolio() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Portfolio</span>
            <h1>Work that speaks for itself and sells the brand clearly.</h1>
          </div>
          <p>
            A premium portfolio should show more than visuals. It should communicate positioning, campaign logic, and measurable business value.
          </p>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="container featured-case">
          <div className="featured-case-copy">
            <span className="eyebrow">Featured direction</span>
            <h2>From dark cinematic mood board to market-ready website.</h2>
            <p>
              The redesigned theme keeps the red and black identity, but adds ivory sections, cleaner spacing, polished cards, better service explanations, and stronger calls to action.
            </p>
            <Button to="/contact">Start a project</Button>
          </div>
          <div className="featured-case-image">
            <ParallaxMedia
              src="/images/legaspi-moodboard.jpg"
              alt="Legaspi Media mood board"
              speed={0.12}
            />
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionIntro
            eyebrow="Selected projects"
            title="Branding, media, web, and growth systems."
            text="Use these cards as placeholders for real projects once you have client work, case study images, and campaign numbers."
            align="center"
            light
          />
          <PortfolioGrid />
        </div>
      </section>

      <CTASection title="Want your brand to look like the obvious premium choice?" />
    </>
  );
}
