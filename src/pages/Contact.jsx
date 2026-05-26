import ContactForm from '../components/ContactForm.jsx';
import SectionIntro from '../components/SectionIntro.jsx';

export default function Contact() {
  return (
    <>
      <section className="page-hero contact-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Contact</span>
            <h1>Let’s create something powerful for your brand.</h1>
          </div>
          <p>
            Tell us what you are building. We will help you identify the right content direction, service package, and next step for your brand.
          </p>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="container contact-grid">
          <div className="contact-details">
            <SectionIntro
              eyebrow="Start the conversation"
              title="Book a call or send your project details."
              text="This section is designed to feel premium but still easy to use. It gives buyers the confidence to inquire without overthinking."
            />
            <div className="contact-methods">
              <article>
                <span>Email</span>
                <a href="mailto:hello@legaspimedia.com">hello@legaspimedia.com</a>
              </article>
              <article>
                <span>Phone</span>
                <a href="tel:+639123456789">+63 912 345 6789</a>
              </article>
              <article>
                <span>Studio</span>
                <p>Manila, Philippines</p>
              </article>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
