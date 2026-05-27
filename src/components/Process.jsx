
import SectionIntro from '../components/SectionIntro.jsx';
import ProcessTimeline from '../components/ProcessTimeline.jsx';

export default function Process({ id }) {return(
      <section id={id} className="section section-dark pattern-section">
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
);}