import { stats } from '../data/siteData.js';

export default function StatsGrid({ compact = false }) {
  return (
    <div className={`stats-grid ${compact ? 'compact' : ''}`}>
      {stats.map((item) => (
        <div className="stat-card" key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
