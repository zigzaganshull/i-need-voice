import { useRef, useState } from "react";

import "./voiceplayer.css";

function VoicePlayer({ audio }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const handleEnded = () => {
    setPlaying(false);
  };

  return (
    <div className="voice-player">
      <audio
        ref={audioRef}
        src={audio}
        onEnded={handleEnded}
      />

      <button
        className={`voice-player__button ${
          playing ? "voice-player__button--playing" : ""
        }`}
        onClick={togglePlay}
        aria-label={playing ? "Pause demo" : "Play demo"}
      >
        {playing ? "Ⅱ" : "▶"}
      </button>

      <div className="voice-player__wave">
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
        <span></span>
      </div>

      <span className="voice-player__label">
        {playing ? "PLAYING" : "LISTEN"}
      </span>
    </div>
  );
}

export default VoicePlayer;