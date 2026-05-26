import { Link } from 'react-router-dom';

export default function Logo({ compact = false }) {
  return (
    <Link
      to="/"
      className={`logo ${compact ? 'logo-compact' : ''}`}
      aria-label="Legaspi Media home"
    >
      <span className="logo-mark" aria-hidden="true">
        <img
          src="/images/legaspi-logo.jpg"
          alt=""
          width="48"
          height="48"
          loading="eager"
          decoding="async"
          draggable="false"
        />
      </span>

      {!compact && (
        <span className="logo-copy">
          <strong>Legaspi</strong>
          <small>Media</small>
        </span>
      )}
    </Link>
  );
}
