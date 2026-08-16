import { Link } from "react-router-dom";

import "./services.css";

function Services() {
  const services = [
    {
      number: "01",
      title: "Commercial",
      description:
        "Powerful voices for advertising, campaigns and branded content.",
    },
    {
      number: "02",
      title: "Corporate",
      description:
        "Clear, confident narration for corporate films and presentations.",
    },
    {
      number: "03",
      title: "E-Learning",
      description:
        "Natural voices that make educational content engaging and easy to follow.",
    },
    {
      number: "04",
      title: "Dubbing",
      description:
        "Professional multilingual voices for video, animation and digital content.",
    },
  ];

  return (
    <section
      className="home-services"
      data-animate
    >

      <div className="home-services__header">

        <div className="home-services__label">
          <span></span>
          WHAT WE DO
        </div>

        <Link
          to="/services"
          className="home-services__all"
        >
          VIEW ALL SERVICES ↗
        </Link>

      </div>

      <div className="home-services__title">
        <h2>
          Voices for
          <br />
          <em>every project.</em>
        </h2>
      </div>

      <div className="home-services__grid">

        {services.map((service) => (
          <Link
            to="/services"
            className="home-service-card"
            key={service.number}
          >

            <div className="home-service-card__top">

              <span>
                {service.number}
              </span>

              <span className="home-service-card__arrow">
                ↗
              </span>

            </div>

            <div className="home-service-card__content">

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}

export default Services;