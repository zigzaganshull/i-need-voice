import VoiceCard from "./voicecard";
import "./voicegrid.css";

function VoiceGrid({ voices }) {
  if (!voices.length) {
    return (
      <div className="voice-grid__empty">
        <h3>No voices found.</h3>
        <p>Try changing your search filters.</p>
      </div>
    );
  }

  return (
    <div className="voice-grid profile-voice-grid">
      {voices.map((voice) => (
        <VoiceCard
          key={voice.id}
          voice={voice}
        />
      ))}
    </div>
  );
}

export default VoiceGrid;