import "./hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero__decor hero__decor--one"></div>
      <div className="hero__decor hero__decor--two"></div>

      <div className="hero__container">

        <div className="hero__content">

          <p className="hero__eyebrow">
          </p>

          <h1 className="hero__title">
            <span>The Voice</span>
            <span>Over Agency</span>
          </h1>

          <p className="hero__description">

          </p>

          <div
            className="hero-buttons"
            data-hero-buttons
          >

            <a
              href="#voices"
              className="hero__button hero__button--primary"
            >
              <span>DEMO SEARCH</span>

              <span className="hero__button-arrow">
                ↗
              </span>
            </a>

            <a
              href="#quote"
              className="hero__button hero__button--secondary"
            >
              <span>REQUEST A QUOTE</span>

              <span className="hero__button-arrow">
                ↗
              </span>
            </a>

          </div>

        </div>

        <div className="hero__visual">

          <div className="hero__circle">

            <div className="hero__wave">

              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>

            </div>

            <div className="hero__circle-text">
              <span>VOICE</span>
              <span>MATTERS</span>
            </div>

          </div>

        </div>

      </div>

      <div className="hero__bottom">

        <span>
          SCROLL TO DISCOVER
        </span>

        <span className="hero__scroll-line"></span>

      </div>

    </section>
  );
}

export default Hero;