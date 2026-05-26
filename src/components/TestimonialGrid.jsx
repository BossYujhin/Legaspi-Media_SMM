import { testimonials } from '../data/siteData.js';

export default function TestimonialGrid() {
  return (
    <div className="testimonial-grid">
      {testimonials.map((item) => (
        <article className="testimonial-card" key={item.name}>
          <div className="stars">★★★★★</div>
          <p>“{item.quote}”</p>
          <div>
            <strong>{item.name}</strong>
            <span>{item.role}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
