
import TestimonialGrid from '../components/TestimonialGrid.jsx';
import SectionIntro from '../components/SectionIntro.jsx';

export default function Testimonial({ id }) {return
    (
      <section id={id} className="section section-ivory">
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


    );
}