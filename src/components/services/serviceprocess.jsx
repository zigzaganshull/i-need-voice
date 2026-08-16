function ServiceProcess() {
  const steps = [
    {
      number: "01",
      title: "Tell us what you need",
      description:
        "Share your project details, preferred language, style and voice requirements.",
    },
    {
      number: "02",
      title: "Choose your voice",
      description:
        "Explore our professional voice artists and listen to their demos.",
    },
    {
      number: "03",
      title: "We record",
      description:
        "Your selected voice artist records your script according to your brief.",
    },
    {
      number: "04",
      title: "Receive your audio",
      description:
        "We deliver polished, professional audio ready for your project.",
    },
  ];

  return (
    <section className="service-process">

      <div className="service-process__header">
        <div className="service-process__label">
          <span></span>
          HOW IT WORKS
        </div>

        <h2>
          Simple process.
          <br />
          <em>Great voices.</em>
        </h2>
      </div>

      <div className="service-process__steps">

        {steps.map((step) => (
          <article
            className="service-process__step"
            key={step.number}
          >
            <span className="service-process__number">
              {step.number}
            </span>

            <div className="service-process__content">
              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>

            <span className="service-process__arrow">
              ↗
            </span>
          </article>
        ))}

      </div>

    </section>
  );
}

export default ServiceProcess;