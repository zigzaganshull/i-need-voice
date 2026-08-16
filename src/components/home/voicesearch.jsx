import { Link } from "react-router-dom";

import "./voicesearch.css";

function VoiceSearch() {
  return (
    <section
      className="home-voice-search"
      data-animate
    >

      <div className="home-voice-search__label">
        <span></span>
        FIND YOUR VOICE
      </div>

      <div className="home-voice-search__content">

        <h2>
          Looking for
          <br />
          <em>the voice?</em>
        </h2>

        <div className="home-voice-search__side">

          <p>
            Explore our growing collection of professional
            voice artists. Filter by language, accent,
            gender and style to find exactly what your
            project needs.
          </p>

          <Link
            to="/voices"
            className="home-voice-search__button"
          >
            <span>EXPLORE VOICES</span>
            <span>↗</span>
          </Link>

        </div>

      </div>

      <div className="home-voice-search__visual">

        <div className="home-voice-search__circle">
          VOICES
        </div>

        <div className="home-voice-search__circle home-voice-search__circle--two">
          LANGUAGES
        </div>

        <div className="home-voice-search__circle home-voice-search__circle--three">
          STORIES
        </div>

      </div>

    </section>
  );
}

export default VoiceSearch;