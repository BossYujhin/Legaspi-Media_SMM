import Button from '../components/Button.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';
export default function Services({ id }) {return(
    <section id={id} className="section section-dark">
        <div className="container">
          <SectionIntro
            eyebrow="What we do"
            title="Strategy. Design. Impact."
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
);}