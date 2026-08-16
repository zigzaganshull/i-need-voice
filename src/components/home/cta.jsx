import { Link } from "react-router-dom";

import "./cta.css";

function CTA() {
  return (
    <section
      className="home-cta"
      data-animate
    >

      <div className="home-cta__label">
        <span></span>
        START A PROJECT
      </div>

      <div className="home-cta__content">

        <h2>
          Give your
          <br />
          story a
          <br />
          <em>voice.</em>
        </h2>

        <div className="home-cta__side">

          <p>
            Tell us what you're working on and
            we'll help you find the right voice
            for your project.
          </p>

          <Link
            to="/quote"
            className="home-cta__button"
          >
            <span>REQUEST A QUOTE</span>
            <span>↗</span>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default CTA;