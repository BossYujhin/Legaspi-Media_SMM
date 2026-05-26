import CTASection from '../components/CTASection.jsx';
import ProcessTimeline from '../components/ProcessTimeline.jsx';
import SectionIntro from '../components/SectionIntro.jsx';

const checkpoints = [
  {
    title: 'Brand clarity',
    text: 'We define the message, target buyer, content pillars, and visual direction before producing assets.',
  },
  {
    title: 'Creative consistency',
    text: 'We keep colors, typography, image style, and copy tone consistent across all platforms.',
  },
  {
    title: 'Performance review',
    text: 'We check engagement, inquiries, reach, watch time, and conversion signals to improve the next cycle.',
  },
];

export default function Process() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Process</span>
            <h1>A refined workflow that keeps creative work strategic and organized.</h1>
          </div>
          <p>
            Clients need to trust the process before they trust the price. This page explains how every project moves from discovery to execution and improvement.
          </p>
        </div>
      </section>

      <section className="section section-dark pattern-section">
        <div className="container">
          <SectionIntro
            eyebrow="How we work"
            title="Five steps from raw idea to scalable brand content."
            text="The process keeps the luxury look while giving the client a clear business path."
            align="center"
            light
          />
          <ProcessTimeline />
        </div>
      </section>

      <section className="section section-ivory">
        <div className="container checkpoints-grid">
          {checkpoints.map((item) => (
            <article key={item.title}>
              <span>✦</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection title="Let’s create a content process your brand can repeat every month." />
    </>
  );
}
