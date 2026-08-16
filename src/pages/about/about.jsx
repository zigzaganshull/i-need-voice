import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";

import "./about.css";

function About() {
  return (
    <>
      <Navbar />

      <div className="page-transition">

        <main className="about-page">

          <section className="about-hero">

            <div className="about-hero__label">
              <span></span>
              ABOUT THE AGENCY
            </div>

            <h1>
              We believe
              <br />
              <em>voice matters.</em>
            </h1>

            <p>
              We connect brands, creators and production
              teams with professional voice artists who
              bring stories to life.
            </p>

          </section>

          <section className="about-story">

            <div className="about-story__label">
              OUR APPROACH
            </div>

            <div className="about-story__content">

              <h2>
                The right voice can
                <br />
                <em>change everything.</em>
              </h2>

              <p>
                Whether it's a commercial, documentary,
                corporate film, e-learning course or
                animation, the voice behind your project
                matters.
              </p>

              <p>
                Our goal is simple: make it easy for
                clients to discover talented voice artists,
                listen to their work and find the perfect
                match for every project.
              </p>

            </div>

          </section>

          <section className="about-values">

            <div className="about-values__header">

              <span>
                WHY WORK WITH US
              </span>

              <h2>
                Built around
                <br />
                <em>great voices.</em>
              </h2>

            </div>

            <div className="about-values__grid about-animate">

              <article>
                <span>01</span>

                <h3>
                  Professional
                  talent
                </h3>

                <p>
                  Access a curated network of
                  professional voice artists across
                  languages, accents and styles.
                </p>
              </article>

              <article>
                <span>02</span>

                <h3>
                  Easy
                  discovery
                </h3>

                <p>
                  Listen to demos, filter by your
                  requirements and find the right
                  voice quickly.
                </p>
              </article>

              <article>
                <span>03</span>

                <h3>
                  Human
                  connection
                </h3>

                <p>
                  We combine technology with a
                  personal approach to make every
                  project feel straightforward.
                </p>
              </article>

            </div>

          </section>

        </main>

      </div>

      <Footer />
    </>
  );
}

export default About;