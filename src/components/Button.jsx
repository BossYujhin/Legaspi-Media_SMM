import { Link } from 'react-router-dom';

export default function Button({ children, to, href, variant = 'primary', className = '' }) {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        <span>{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} type="button">
      <span>{children}</span>
    </button>
  );
}
