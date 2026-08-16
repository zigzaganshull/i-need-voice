import { useState } from "react";

import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";

import "./contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Navbar />

        <div className="page-transition">

          <main className="contact-success">

            <span>MESSAGE SENT</span>

            <h1>
              Thanks.
              <br />
              <em>We'll talk soon.</em>
            </h1>

            <p>
              Your message has been received. Our team
              will get back to you as soon as possible.
            </p>

            <button
              onClick={() => setSubmitted(false)}
            >
              SEND ANOTHER MESSAGE
            </button>

          </main>

        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="page-transition">

        <main className="contact-page">

          <section className="contact-hero">

            <div className="contact-hero__label">
              <span></span>
              GET IN TOUCH
            </div>

            <h1>
              Let's
              <br />
              <em>talk.</em>
            </h1>

            <p>
              Have a project in mind, need help finding
              the right voice or simply want to say hello?
              We'd love to hear from you.
            </p>

          </section>

          <section className="contact-content">

            <div className="contact-info contact-animate">

              <div className="contact-info__block">

                <span>EMAIL</span>

                <a href="mailto:hello@danivoiceovers.com">
                  hello@danivoiceovers.com
                </a>

              </div>

              <div className="contact-info__block">

                <span>PHONE</span>

                <a href="tel:+911234567890">
                  +91 12345 67890
                </a>

              </div>

              <div className="contact-info__block">

                <span>OFFICE</span>

                <p>
                  Gurgaon, Haryana
                  <br />
                  India
                </p>

              </div>

              <div className="contact-info__block">

                <span>WORKING HOURS</span>

                <p>
                  Monday — Friday
                  <br />
                  10:00 — 18:00
                </p>

              </div>

            </div>

            <form
              className="contact-form contact-form-animate"
              onSubmit={handleSubmit}
            >

              <div className="contact-form__group">

                <label htmlFor="name">
                  YOUR NAME
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="contact-form__group">

                <label htmlFor="email">
                  EMAIL ADDRESS
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="contact-form__group">

                <label htmlFor="company">
                  COMPANY
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={handleChange}
                />

              </div>

              <div className="contact-form__group contact-form__group--full">

                <label htmlFor="message">
                  YOUR MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

              </div>

              <button
                type="submit"
                className="contact-form__button"
              >
                <span>SEND MESSAGE</span>
                <span>↗</span>
              </button>

            </form>

          </section>

        </main>

      </div>

      <Footer />
    </>
  );
}

export default Contact;