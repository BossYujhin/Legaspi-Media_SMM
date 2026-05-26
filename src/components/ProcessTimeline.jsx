import { processSteps } from '../data/siteData.js';

export default function ProcessTimeline() {
  return (
    <div className="process-timeline">
      {processSteps.map((step) => (
        <article className="process-step" key={step.number}>
          <span>{step.number}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </article>
      ))}
    </div>
  );
}
