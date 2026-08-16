function ServiceCard({ service }) {
  return (
    <article className="service-card">

      <span className="service-card__number">
        {service.number}
      </span>

      <div className="service-card__content">

        <h2>{service.title}</h2>

        <p>{service.description}</p>

      </div>

      <span className="service-card__arrow">
        ↗
      </span>

    </article>
  );
}

export default ServiceCard;