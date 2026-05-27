import BrandMarquee from '../components/BrandMarquee.jsx';
import Button from '../components/Button.jsx';
import CTASection from '../components/CTASection.jsx';
import Hero from '../components/Hero.jsx';
import ParallaxMedia from '../components/ParallaxMedia.jsx';
import Portfolio from '../components/Portfolio.jsx';
import PortfolioGrid from '../components/PortfolioGrid.jsx';
import Process from '../components/Process.jsx';
import ProcessTimeline from '../components/ProcessTimeline.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import Services from '../components/services.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';
import Stats from '../components/Stats.jsx';
import StatsGrid from '../components/StatsGrid.jsx';
import Testimonial from '../components/Testimonial.jsx';
import TestimonialGrid from '../components/TestimonialGrid.jsx';
import Contact from './Contact.jsx';

export default function Home() {
  return (
    <>
     <Hero id="home" />
     <Stats id="stats" />
     <Services id="services" />
     <Portfolio id="portfolio" />
     <Process id="process" />
     <Testimonial id="testimonials" />
     <CTASection id="cta" />

      

     {/* <section className="section section-ivory">
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
      </section>*/}

      
    </>
  );
}
