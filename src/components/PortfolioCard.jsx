export default function PortfolioCard({ project, index = 0 }) {
  return (
    <article className={`portfolio-card portfolio-tone-${(index % 3) + 1}`}>
      <div className="portfolio-visual">
        <span>{project.title.charAt(0)}</span>
      </div>
      <div className="portfolio-content">
        <span>{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <strong>{project.metric}</strong>
      </div>
    </article>
  );
}
