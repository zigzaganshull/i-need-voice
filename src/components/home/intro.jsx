import "./intro.css";

function Intro() {
  return (
    <section
      className="home-intro"
      data-animate
    >

      <div className="home-intro__label">
        <span></span>
        WHO WE ARE
      </div>

      <div className="home-intro__content">

        <h2>
          The voice
          <br />
          behind the
          <br />
          <em>story.</em>
        </h2>

        <div className="home-intro__text">

          <p>
            We connect brands, creators and production
            teams with professional voice artists from
            around the world.
          </p>

          <p>
            From a single commercial to a complete
            multilingual production, we make finding
            the right voice simple.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Intro;