import Button from '../components/Button.jsx';

export default function NotFound() {
  return (
    <section className="page-hero not-found-page">
      <div className="container center-page">
        <span className="eyebrow">404</span>
        <h1>Page not found.</h1>
        <p>The page you are looking for may have been moved or removed.</p>
        <Button to="/">Back to Home</Button>
      </div>
    </section>
  );
}
