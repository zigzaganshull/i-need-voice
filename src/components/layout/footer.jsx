import { Link } from "react-router-dom";

import "./footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer__top">

        <div className="footer__brand">

          <Link to="/" className="footer__logo">
            I NEED
            <span>VOICE</span>
          </Link>

          <p>
            Professional voices for brands,
            creators and stories that matter.
          </p>

        </div>

        <div className="footer__links">

          <div className="footer__column">

            <span>EXPLORE</span>

            <Link to="/">Home</Link>

            <Link to="/voices">Voice Artists</Link>

            <Link to="/services">Services</Link>

            <Link to="/about">About</Link>

          </div>

          <div className="footer__column">

            <span>CONTACT</span>

            <Link to="/contact">Contact Us</Link>

            <Link to="/quote">Request a Quote</Link>

            <a href="mailto:hello@danivoiceovers.com">
              Email Us
            </a>

          </div>

        </div>

      </div>

      <div className="footer__middle">

        <h2>
          Let's give
          <br />
          <em>it a voice.</em>
        </h2>

        <Link
          to="/quote"
          className="footer__cta"
        >
          <span>START A PROJECT</span>
          <span>↗</span>
        </Link>

      </div>

      <div className="footer__bottom">

        <span>
          © {new Date().getFullYear()} I Need Voice
        </span>

        <div>

          <a href="#" aria-label="Instagram">
            Instagram
          </a>

          <a href="#" aria-label="LinkedIn">
            LinkedIn
          </a>

        </div>

        <span>
          All rights reserved.
        </span>

      </div>

    </footer>
  );
}

export default Footer;