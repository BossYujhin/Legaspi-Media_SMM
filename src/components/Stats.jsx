
import SectionIntro from '../components/SectionIntro.jsx';
import StatsGrid from './StatsGrid.jsx';

export default function Stats({ id }) {
    return(
        
        <section id={id} className="section section-ivory">
        <div className="container split-section">
          <SectionIntro
            eyebrow="Market-ready positioning"
            title="Not just attractive. Built to convert attention into trust."
            text="The original mockup had a strong cinematic identity. This version keeps the bold red and black luxury feel, but adds cleaner spacing, lighter premium sections, sharper CTAs, and clearer service messaging for real buyers."/>
          <StatsGrid />
        </div>
      </section>
      
    );
}