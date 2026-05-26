import Button from './Button.jsx';

export default function ContactForm() {
  return (
    <form className="contact-form">
      <div className="form-row">
        <label>
          Full name
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Email address
          <input type="email" name="email" placeholder="you@example.com" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Company / Brand
          <input type="text" name="brand" placeholder="Brand name" />
        </label>
        <label>
          Monthly budget
          <select name="budget" defaultValue="">
            <option value="" disabled>Select range</option>
            <option>$800 - $1,500</option>
            <option>$1,500 - $3,000</option>
            <option>$3,000+</option>
          </select>
        </label>
      </div>
      <label>
        What service do you need?
        <select name="service" defaultValue="">
          <option value="" disabled>Select service</option>
          <option>Social Media Management</option>
          <option>Brand Strategy</option>
          <option>Content Design</option>
          <option>Paid Ads & Growth</option>
          <option>Full Agency Support</option>
        </select>
      </label>
      <label>
        Tell us about your project
        <textarea name="message" rows="6" placeholder="Share your goals, deadline, and current challenges." />
      </label>
      <Button>Send inquiry</Button>
    </form>
  );
}
