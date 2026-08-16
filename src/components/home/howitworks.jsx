import { Link } from "react-router-dom";

import "./howitworks.css";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tell us about your project",
      description:
        "Share your script, language, style and project requirements with us.",
    },
    {
      number: "02",
      title: "Find your voice",
      description:
        "Browse professional artists and listen to their demos until you find the right fit.",
    },
    {
      number: "03",
      title: "Request a quote",
      description:
        "Send us your requirements and we'll prepare the next steps for your project.",
    },
    {
      number: "04",
      title: "Receive your recording",
      description:
        "Your selected voice artist records the script and we deliver the finished audio.",
    },
  ];

  return (
    <section
      className="home-how-it-works"
      data-animate
    >

      <div className="home-how-it-works__header">

        <div className="home-how-it-works__label">
          <span></span>
          HOW IT WORKS
        </div>

        <h2>
          From idea
          <br />
          to <em>voice.</em>
        </h2>

      </div>

      <div className="home-how-it-works__steps">

        {steps.map((step) => (
          <article
            className="home-how-it-works__step"
            key={step.number}
          >

            <span className="home-how-it-works__number">
              {step.number}
            </span>

            <div className="home-how-it-works__content">

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>

            <span className="home-how-it-works__arrow">
              ↗
            </span>

          </article>
        ))}

      </div>

      <div className="home-how-it-works__bottom">

        <p>
          Ready to find the right voice for your next
          project?
        </p>

        <Link to="/quote">
          GET STARTED ↗
        </Link>

      </div>

    </section>
  );
}

export default HowItWorks;