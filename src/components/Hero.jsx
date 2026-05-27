import BrandMarquee from "./BrandMarquee";
import ParallaxMedia from '../components/ParallaxMedia.jsx';
import Button from '../components/Button.jsx';


export default function Hero({ id }) {
    return(
      <>
     <section id={id} className="hero-section">
        <div className="hero-bg-noise" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Strategic Media & Design</span>
            <h1>
              We create brands that <em>leave a Mark.</em>
            </h1>
            <p>
             Legaspi Media is a creative agency that helps ambotious brands stand out through Strategic branding, high-converting websites, and powerful media.
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
            {/*<div className="floating-panel panel-one">
              <span>Campaign impact</span>
              <strong>3.8x</strong>
              <small>average engagement lift</small>
            
            <div className="floating-panel panel-two">
              <span>Brand system</span>
              <strong>Noir / Red / Ivory</strong>
            </div></div>*/}
          </div>
        </div>
        <BrandMarquee />
      </section>
      </>
    );
}