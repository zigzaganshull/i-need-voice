import ServiceCard from "./servicecard";

function ServiceGrid() {
  const services = [
    {
      id: 1,
      number: "01",
      title: "Commercial Voice Over",
      description:
        "Professional voices for advertisements, campaigns and branded content.",
    },
    {
      id: 2,
      number: "02",
      title: "Corporate Voice Over",
      description:
        "Clear and engaging narration for corporate videos, presentations and internal communications.",
    },
    {
      id: 3,
      number: "03",
      title: "E-Learning",
      description:
        "Natural voice narration for courses, training programs and educational content.",
    },
    {
      id: 4,
      number: "04",
      title: "Dubbing",
      description:
        "Professional multilingual dubbing for films, videos, animation and digital content.",
    },
    {
      id: 5,
      number: "05",
      title: "Narration",
      description:
        "Expressive voices for documentaries, audiobooks, podcasts and storytelling.",
    },
    {
      id: 6,
      number: "06",
      title: "IVR & Voice Systems",
      description:
        "Professional voices for phone systems, IVR, announcements and branded experiences.",
    },
  ];

  return (
    <section className="service-grid">

      <div className="service-grid__header">
        <span>OUR SERVICES</span>
        <span>{services.length} SERVICES</span>
      </div>

      <div className="service-grid__items service-animate">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </div>

    </section>
  );
}

export default ServiceGrid;