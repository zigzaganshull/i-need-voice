import { useParams, Link } from "react-router-dom";

import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";
import VoicePlayer from "../../components/voices/voiceplayer";

import voices from "../../data/voices";

import "./voiceprofile.css";

function VoiceProfile() {
  const { id } = useParams();

  const voice = voices.find(
    (item) => item.id === Number(id)
  );

  if (!voice) {
    return (
      <>
        <Navbar />

        <div className="page-transition">

          <main className="voice-profile__not-found">

            <h1>Voice not found.</h1>

            <Link to="/voices">
              ← BACK TO VOICES
            </Link>

          </main>

        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="page-transition">

        <main className="voice-profile">

          <section className="voice-profile__hero">

            <div className="voice-profile__image profile-animate">

              <img
                src={voice.image}
                alt={voice.name}
              />

            </div>

            <div className="voice-profile__content profile-animate">

              <Link
                to="/voices"
                className="voice-profile__back profile-detail"
              >
                ← ALL VOICES
              </Link>

              <span className="voice-profile__category profile-detail">
                {voice.category}
              </span>

              <h1 className="profile-detail">
                {voice.name}
              </h1>

              <p className="voice-profile__subtitle profile-detail">
                Professional {voice.language} voice artist
              </p>

              <div className="voice-profile__details profile-detail">

                <div>
                  <span>LANGUAGE</span>
                  <strong>{voice.language}</strong>
                </div>

                <div>
                  <span>ACCENT</span>
                  <strong>{voice.accent}</strong>
                </div>

                <div>
                  <span>GENDER</span>
                  <strong>{voice.gender}</strong>
                </div>

                <div>
                  <span>AGE</span>
                  <strong>{voice.age}</strong>
                </div>

              </div>

              <div className="voice-profile__demo profile-detail">

                <span className="voice-profile__demo-label">
                  LISTEN TO DEMO
                </span>

                <VoicePlayer audio={voice.audio} />

              </div>

              <Link
                to={`/quote?voice=${voice.id}`}
                className="voice-profile__button profile-detail"
              >
                <span>REQUEST THIS VOICE</span>
                <span>↗</span>
              </Link>

            </div>

          </section>

        </main>

      </div>

      <Footer />
    </>
  );
}

export default VoiceProfile;