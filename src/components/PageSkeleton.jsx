export default function PageSkeleton() {
  return (
    <section className="page-loading-shell" aria-label="Loading page content">
      <div className="container skeleton-layout">
        <div className="skeleton-copy">
          <span className="skeleton-line skeleton-eyebrow" />
          <span className="skeleton-line skeleton-title" />
          <span className="skeleton-line skeleton-title short" />
          <span className="skeleton-line skeleton-text" />
          <span className="skeleton-line skeleton-text medium" />
          <div className="skeleton-actions">
            <span />
            <span />
          </div>
        </div>
        <div className="skeleton-visual">
          <span className="skeleton-glow" />
        </div>
      </div>
      <div className="container skeleton-card-grid">
        <article />
        <article />
        <article />
      </div>
    </section>
  );
}
