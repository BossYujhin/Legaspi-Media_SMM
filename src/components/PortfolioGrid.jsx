import { caseStudies } from '../data/siteData.js';
import PortfolioCard from './PortfolioCard.jsx';

export default function PortfolioGrid({ limit }) {
  const visibleProjects = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <div className="portfolio-grid">
      {visibleProjects.map((project, index) => (
        <PortfolioCard key={project.title} project={project} index={index} />
      ))}
    </div>
  );
}
