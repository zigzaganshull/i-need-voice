import "./clients.css";

const clients = [
  "NIKE",
  "SAMSUNG",
  "GOOGLE",
  "MICROSOFT",
  "ADIDAS",
  "SONY",
  "NETFLIX",
  "SPOTIFY",
];

function Clients() {
  return (
    <section className="clients" id="clients">
      <div className="clients__container">

        <div className="clients__header">

          <div className="clients__label">
            <span></span>
            TRUSTED BY
          </div>

          <h2 className="clients__title">
            Voices behind
            <br />
            <span>great brands.</span>
          </h2>

        </div>

        <div className="clients__grid">

          {clients.map((client, index) => (
            <div className="client" key={client}>

              <span className="client__number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="client__name">
                {client}
              </span>

            </div>
          ))}

        </div>

        <div className="clients__bottom">

          <p>
            Your project could be next.
          </p>

          <a href="#quote">
            <span>WORK WITH US</span>
            <span>↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Clients;