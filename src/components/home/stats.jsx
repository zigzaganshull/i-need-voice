import "./stats.css";

function Stats() {
  const stats = [
    {
      number: "500+",
      label: "VOICE ARTISTS",
    },
    {
      number: "40+",
      label: "LANGUAGES",
    },
    {
      number: "20+",
      label: "ACCENTS",
    },
    {
      number: "1K+",
      label: "PROJECTS",
    },
  ];

  return (
    <section
      className="home-stats"
      data-animate
    >

      <div className="home-stats__header">
        <span></span>
        <p>THE NUMBERS</p>
      </div>

      <div className="home-stats__grid">

        {stats.map((stat) => (
          <div
            className="home-stat"
            key={stat.label}
          >

            <strong>{stat.number}</strong>

            <span>{stat.label}</span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Stats;