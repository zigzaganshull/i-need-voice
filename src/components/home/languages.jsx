import { Link } from "react-router-dom";

import "./languages.css";

function Languages() {
  const languages = [
    "English",
    "Hindi",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Portuguese",
    "Arabic",
    "Japanese",
    "Korean",
    "Dutch",
    "Polish",
  ];

  return (
    <section
      className="home-languages"
      data-animate
    >

      <div className="home-languages__header">

        <div className="home-languages__label">
          <span></span>
          LANGUAGES
        </div>

        <Link
          to="/voices"
          className="home-languages__link"
        >
          EXPLORE VOICES ↗
        </Link>

      </div>

      <div className="home-languages__intro">

        <h2>
          One story.
          <br />
          <em>Many voices.</em>
        </h2>

        <p>
          Find professional voice artists across
          languages, accents and cultures.
        </p>

      </div>

      <div className="home-languages__list">

        {languages.map((language, index) => (
          <Link
            to="/voices"
            className="home-language"
            key={language}
          >

            <span className="home-language__number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="home-language__name">
              {language}
            </span>

            <span className="home-language__arrow">
              ↗
            </span>

          </Link>
        ))}

      </div>

    </section>
  );
}

export default Languages;