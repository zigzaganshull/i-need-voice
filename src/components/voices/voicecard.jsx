import { Link } from "react-router-dom";

import VoicePlayer from "./voiceplayer";

import "./voicecard.css";

function VoiceCard({ voice }) {
  return (
    <article className="voice-card">

      <Link
        to={`/voices/${voice.id}`}
        className="voice-card__image"
      >
        <img
          src={voice.image}
          alt={voice.name}
        />

        <span className="voice-card__category">
          {voice.category}
        </span>
      </Link>

      <div className="voice-card__content">

        <div className="voice-card__top">

          <div>
            <Link to={`/voices/${voice.id}`}>
              <h3>{voice.name}</h3>
            </Link>

            <p>
              {voice.gender} · {voice.age}
            </p>
          </div>

          <Link
            to={`/voices/${voice.id}`}
            className="voice-card__arrow"
            aria-label={`View ${voice.name}`}
          >
            ↗
          </Link>

        </div>

        <div className="voice-card__details">

          <span>{voice.language}</span>
          <span>{voice.accent}</span>

        </div>

        <VoicePlayer audio={voice.audio} />

      </div>

    </article>
  );
}

export default VoiceCard;