
import PortfolioGrid from '../components/PortfolioGrid.jsx';

import SectionIntro from '../components/SectionIntro.jsx';

export default function Portfolio({ id }) {return(
    <section id={id} className="section section-redline">
            <div className="container">
              <SectionIntro
                eyebrow="Featured work"
                title="Selected Projects"
                text="Each project is presented as a business result, not just a pretty visual. That makes the portfolio more convincing for clients."
                align="center"
              />
              <PortfolioGrid limit={3} />
            </div>
          </section>
);}